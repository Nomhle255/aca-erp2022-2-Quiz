// Question.tsx
import React from 'react';

interface QuestionProps {
  data: { question: string; options: string[]; answer: string };
  onAnswer: (option: string) => void;
  selected: string | null;
}

const Question: React.FC<QuestionProps> = ({ data, onAnswer, selected }) => {
  return (
    <div>
      <h3>{data.question}</h3>
      <div>
        {data.options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              name="answer"
              value={option}
              checked={selected === option}
              onChange={() => onAnswer(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
