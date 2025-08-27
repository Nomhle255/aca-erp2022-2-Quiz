
import React from 'react';
import Question from './Question';
import Summary from './Summary';

type QuizProps = {
  questions: any[];
  answers: any;
  handleAnswerChange: (questionIndex: number, selectedOption: string) => void;
  handleSubmit: () => void;
  score: number | null;
  quizKey: number;
};

const Quiz: React.FC<QuizProps> = ({
  questions,
  answers,
  handleAnswerChange,
  handleSubmit,
  score,
  quizKey,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Reset currentIndex when questions change or quizKey changes (i.e., when starting a new quiz)
  React.useEffect(() => {
    setCurrentIndex(0);
  }, [questions, quizKey]);

  if (!questions || questions.length === 0) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Show results only when quiz is submitted
  if (score !== null) {
    return <Summary score={score} total={questions.length} />;
  }

  // Progress bar (optional)
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-container">
      <div style={{ marginBottom: '1em' }}>
        <div style={{ background: '#eee', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, background: '#4caf50', height: '100%' }} />
        </div>
      </div>
      <h2>Question {currentIndex + 1} of {questions.length}</h2>
      <Question
        data={questions[currentIndex]}
        selected={answers[currentIndex]}
        onAnswer={(option: string) => handleAnswerChange(currentIndex, option)}
      />
      {/* Show selected answer for clarity */}
      {answers[currentIndex] && (
        <div style={{ marginTop: '0.5em', color: '#333' }}>
          Selected answer: <strong>{answers[currentIndex]}</strong>
        </div>
      )}
      <div style={{ marginTop: '1em' }}>
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        {currentIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            style={{ marginLeft: '1em' }}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            style={{ marginLeft: '1em' }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;