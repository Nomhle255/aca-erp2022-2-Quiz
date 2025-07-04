import React, { useState, useEffect } from "react";
import { getQuestions } from "./data/fetchQuestions";  // Import the getQuestions function
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";  // Import React Router
import Registration from "./auth/Registration";  // Registration component
import Login from "./auth/Login";  // Login component
import Quiz from "./components/Quiz";  // The Quiz component (newly added)

const App = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [answers, setAnswers] = useState<any>({});
  const [score, setScore] = useState<number>(0);
  const [user, setUser] = useState<any>(null);  

  useEffect(() => {
    // Mocking the fetching process for the sake of this example
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const questionsData = await getQuestions();  // Fetch from Firestore (replace with your actual logic)
        setQuestions(questionsData);  // Set questions to state
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionIndex: number, selectedOption: string) => {
    setAnswers({
      ...answers,
      [questionIndex]: selectedOption,
    });
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers += 1;  // Increment score for correct answer
      }
    });
    setScore(correctAnswers);  // Set the score
  };

  return (
    <Router>
      <div>
        <h1>Quiz App</h1>

        {/* If the user is not logged in, show the Registration and Login buttons */}
        {!user ? (
          <div>
            <h2>Welcome to the Quiz App</h2>
            <div>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2>Welcome {user?.displayName || "User"}</h2>
            {loading ? (
              <div>Loading questions...</div>  // Show loading indicator
            ) : (
              <>
                {questions.length === 0 ? (
                  <div>No questions available.</div>
                ) : (
                  <div>
                    {/* Render the Quiz */}
                    <form>
                      <ul>
                        {questions.map((question, index) => (
                          <li key={index}>
                            <h3>{question?.question || "No question"}</h3>
                            {question?.options && Array.isArray(question.options) && (
                              <div>
                                {question.options.map((option: string, i: number) => (
                                  <label key={i}>
                                    <input
                                      type="radio"
                                      name={`question-${index}`}
                                      value={option}
                                      checked={answers[index] === option}
                                      onChange={() => handleAnswerChange(index, option)}
                                    />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                      <button type="button" onClick={handleSubmit}>Submit Answers</button>
                    </form>
                    <div>
                      <h2>Your Score: {score}</h2>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Registration />} />
        
        {/* Private Route for the quiz page */}
        <Route path="/quiz" element={user ? <Quiz /> : <Login setUser={setUser} />} />
      </Routes>
    </Router>
  );
};

export default App;
