import React from 'react';
import { Question as QuestionType } from '../data/questions';

type Props = {
  data: QuestionType;
  onAnswer: (selected: string) => void;
  selected: string | null;
};

const Question: React.FC<Props> = ({ data, onAnswer, selected }) => {
  return (
    <div className="quiz-container">
      <h3 className="question-text">{data.question}</h3>
      <ul className="options-list">
        {data.options.map((option, index) => (
          <li key={index} className="option-item">
            <button
              className={`option-button ${selected === option ? 'selected' : ''}`}
              onClick={() => onAnswer(option)}
            >
              {index + 1}. {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
