import React from 'react';
import { questions } from '../data/questions';

type Props = {
  score: number;
};

const Summary: React.FC<Props> = ({ score }) => {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>Your Score: {score}/{questions.length}</p>
      <h3>Explanation Summary</h3>
      <ul>
        {questions.map(q => (
          <li key={q.id}>
            <strong>Q:</strong> {q.question}<br />
            <strong>A:</strong> {q.answer}<br />
            <em>{q.explanation}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
