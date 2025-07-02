import React, { useState } from 'react';
import Question from './Question';
import { questions } from '../data/questions';
import { saveScore } from '../utils/storage';
import Summary from './Summary';

const Quiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore(prev => prev + 1);
    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      saveScore(score + (correct ? 1 : 0));
      setShowSummary(true);
    }
  };

  if (showSummary) return <Summary score={score} />;

  return <Question question={questions[current]} onAnswer={handleAnswer} />;
};

export default Quiz;
