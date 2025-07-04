import React, { useState, useEffect } from 'react';
import { getQuestions } from '../data/fetchQuestions';  // Import the function to fetch questions
import Question from './Question';  
import Summary from './Summary';  // The summary component to show the final score
import { saveScore } from '../utils/storage';  // Function to save the score

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);  // State to hold fetched questions
  const [currentIndex, setCurrentIndex] = useState(0);  // To track the current question index
  const [score, setScore] = useState(0);  // To track the user's score
  const [showSummary, setShowSummary] = useState(false);  // Flag to show the summary
  const [selected, setSelected] = useState<string | null>(null);  // Store selected answer

  // Fetch the questions from the database when the component mounts
  useEffect(() => {
    const fetchQuestionsFromDb = async () => {
      try {
        const fetchedQuestions = await getQuestions();  // Fetch questions
        setQuestions(fetchedQuestions);  // Correctly update state with fetched questions
      } catch (error) {
        console.error("Failed to load questions", error);
      }
    };

    fetchQuestionsFromDb();  // Call the function to fetch questions
  }, []);  // Empty array to run this effect only once, on mount

  const handleAnswer = (option: string) => {
    setSelected(option);  // Update the selected answer
  };

  const handleNext = () => {
    const correct = questions[currentIndex].answer;
    if (selected === correct) {
      setScore(prev => prev + 1);  // Increment the score if the selected answer is correct
    }

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);  // Move to the next question
      setSelected(null);  // Reset selected answer for the next question
    } else {
      saveScore(score);  // Save the final score
      setShowSummary(true);  // Show the summary page
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);  // Go to the previous question
      setSelected(null);  // Reset selected answer when going back
    }
  };

  // If no questions are loaded yet, show a loading message
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (showSummary) {
    return <Summary score={score} total={questions.length} />;  // Show the summary with the score
  }

  return (
    <div className="quiz-container">
      <h2>Question {currentIndex + 1} of {questions.length}</h2>
      <Question
        data={questions[currentIndex]}  // Pass the question data to the Question component
        onAnswer={handleAnswer}
        selected={selected}
      />

      <div className="nav-buttons">
        {currentIndex > 0 && (
          <button className="prev-button" onClick={handleBack}>
            Previous
          </button>
        )}
        <button className="next-button" onClick={handleNext}>
          {currentIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
