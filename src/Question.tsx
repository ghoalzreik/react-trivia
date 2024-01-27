import React, { useState } from "react";
import "./Question.css";

interface QuestionProps {
  questionData: {
    question: string;
    choices: string[];
    correctAnswer: string;
  };
  onAnswer: (userAnswer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ questionData, onAnswer }) => {
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleChoiceSelection = (choice: string) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice !== "") {
      onAnswer(selectedChoice);
      setSelectedChoice("");
    }
  };

  return (
    <div className="question-container">
      <h2>{questionData.question}</h2>
      <div className="choices-container">
        {questionData.choices.map((choice, index) => (
          <div
            key={index}
            className={`choice ${selectedChoice === choice ? "selected" : ""}`}
            onClick={() => handleChoiceSelection(choice)}
          >
            {choice}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={selectedChoice === ""}>
        Submit
      </button>
    </div>
  );
};

export default Question;
