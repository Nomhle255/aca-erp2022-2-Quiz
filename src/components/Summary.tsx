// Summary.tsx
import React from 'react';

interface SummaryProps {
  score: number;
  total: number;
}

const Summary: React.FC<SummaryProps> = ({ score, total }) => {
  return (
    <div>
      <h2>Quiz Complete!</h2>
      <p>
        Your score is {score} out of {total}.
      </p>
    </div>
  );
};

export default Summary;
