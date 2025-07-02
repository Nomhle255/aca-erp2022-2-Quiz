import React from 'react';
import { QuestionType } from '../data/questions';

type Props = {
  question: QuestionType;
  onAnswer: (correct: boolean) => void;
};

const Question: React.FC<Props> = ({ question, onAnswer }) => {
  const handleAnswer = (option: string) => {
    const isCorrect = option === question.answer;
    onAnswer(isCorrect);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((opt) => (
          <li key={opt} onClick={() => handleAnswer(opt)}>{opt}</li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
