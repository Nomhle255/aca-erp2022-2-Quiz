import React from 'react';
import { questions } from '../data/questions';

type Props = {
  score: number;
  total: number;
};

const Summary: React.FC<Props> = ({ score, total }) => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">Quiz Complete!</h2>
      <p className="summary-score">Your Score: {score} / {total}</p>

      <h3 className="summary-breakdown-title">Question Breakdown:</h3>

      {questions.map((q) => (
        <div key={q.id} className="summary-question">
          <p><strong>Q{q.id}:</strong> {q.question}</p>
          <p><strong>Correct Answer:</strong> <span className="correct-answer">{q.answer}</span></p>
          <p><strong>Explanation:</strong> <em>{q.explanation}</em></p>
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
};

export default Summary;
