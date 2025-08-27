import React, { useState, useEffect } from "react";
import { getQuestions } from "./data/fetchQuestions";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import Quiz from "./components/Quiz";

const App = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [answers, setAnswers] = useState<any>({});
  const [score, setScore] = useState<number | null>(null);
  const [user, setUser] = useState<any>(null);
  const [quizKey, setQuizKey] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const questionsData = await getQuestions();
        // Always use only the first 50 questions
        setQuestions(questionsData.slice(0, 50));
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
        correctAnswers += 1;
      }
    });
    setScore(correctAnswers);
  };

  // Reset quiz state when starting a new quiz
  const handleStartQuiz = () => {
    setAnswers({});
    setScore(null);
    setQuizKey(prev => prev + 1);
  };

  return (
    <Router>
      <div>
        <h1>Quiz App</h1>
        {loading ? (
          <div>Loading questions...</div>
        ) : (
          <>
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
                <Link to="/quiz" onClick={handleStartQuiz}>
                  <button>Start Quiz</button>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/quiz"
          element={user ? (
            <Quiz
              questions={questions}
              answers={answers}
              handleAnswerChange={handleAnswerChange}
              handleSubmit={handleSubmit}
              score={score}
              quizKey={quizKey}
            />
          ) : (
            <Login setUser={setUser} />
          )}
        />
      </Routes>
    </Router>
  );
};

export default App;