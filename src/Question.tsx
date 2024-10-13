import React from "react";
import "./Question.css";

interface QuestionData {
  question: string;
  choices: string[];
  correctAnswer: string;
}

interface QuestionProps {
  questionData: QuestionData;
  onAnswer: (userAnswer: string) => void;
  selectedAnswer: string | null;
}

const Question: React.FC<QuestionProps> = ({
  questionData,
  onAnswer,
  selectedAnswer,
}) => {
  const handleAnswer = (userAnswer: string) => {
    onAnswer(userAnswer);
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      <div className="choices-container">
        {questionData.choices.map((choice, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(choice)}
            className={`choice-btn ${
              selectedAnswer === choice
                ? `selected ${
                    selectedAnswer === questionData.correctAnswer
                      ? "correct"
                      : "incorrect"
                  }`
                : ""
            }`}
            disabled={selectedAnswer !== null}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
