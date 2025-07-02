import React, { useState } from 'react';
import { questions } from '../data/questions';
import Question from './Question';
import Summary from './Summary';
import { saveScore } from '../utils/storage';

const Quiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleAnswer = (option: string) => {
    setSelected(option);
    setError(false); // clear error when an answer is chosen
  };

  const handleNext = () => {
    if (!selected) {
      setError(true);
      return;
    }

    const correct = questions[currentIndex].answer;
    if (selected === correct) {
      setScore(prev => prev + 1);
    }

    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
      setSelected(null);
    } else {
      saveScore(score);
      setShowSummary(true);
    }
  };

  if (showSummary) return <Summary score={score} total={questions.length} />;

  return (
    <div className="quiz-container">
      <h2>Question {currentIndex + 1} of {questions.length}</h2>
      <Question data={questions[currentIndex]} onAnswer={handleAnswer} selected={selected} />
      
      {error && <p style={{ color: 'red' }}>⚠️ Please select an answer before continuing.</p>}

      <button onClick={handleNext} className="next-button">
        Next
      </button>
    </div>
  );
};

export default Quiz;
