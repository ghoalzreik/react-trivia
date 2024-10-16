import React, { useState } from "react";
import "./App.css";
import Question from "./Question";

interface QuestionData {
  question: string;
  choices: string[];
  correctAnswer: string;
}

const questionsAndAnswers: QuestionData[] = [
  {
    question: "What animated series is about a Sponge who lives under the sea?",
    choices: ["The Flintstones", "Hey Arnold!", "SpongeBob SquarePants"],
    correctAnswer: "SpongeBob SquarePants",
  },
  {
    question: "What Nickelodeon animated series is about a young genius kid?",
    choices: ["Hey Arnold!", "Jerry", "The Adventures of Jimmy Neutron"],
    correctAnswer: "The Adventures of Jimmy Neutron",
  },
  {
    question: "Which one of Scooby Doo's human chums wears glasses?",
    choices: ["Velma", "Candy", "Daphne"],
    correctAnswer: "Velma",
  },
  {
    question: "Which cartoon mouse is perennially chased by Tom?",
    choices: ["Mickey Mouse", "Jerry", "Woody"],
    correctAnswer: "Jerry",
  },
  {
    question:
      "Which TV cartoon theme tune contains the line 'Let's ride with the family down the street'?",
    choices: ["The Flintstones", "Hey Arnold!", "SpongeBob SquarePants"],
    correctAnswer: "The Flintstones",
  },
  {
    question:
      "Which animated TV show features the catchphrase 'Yabba dabba doo!'?",
    choices: ["The Flintstones", "Hey Arnold!", "SpongeBob SquarePants"],
    correctAnswer: "The Flintstones",
  },
  {
    question: "What is the name of the cat in the comic strip Garfield?",
    choices: ["Garfield", "CatDog", "Simba"],
    correctAnswer: "Garfield",
  },
  {
    question:
      "What's the name of the animated film character 'The Little Mermaid'?",
    choices: ["Ursula", "Ariel", "Elsa"],
    correctAnswer: "Ariel",
  },
  {
    question: "Flynn Rider is from which cartoon film?",
    choices: ["Avatar Korra", "Sleeping Beauty", "Tangled"],
    correctAnswer: "Tangled",
  },
  {
    question: "Aurora is from which cartoon film?",
    choices: ["Avatar Korra", "Sleeping Beauty", "Tangled"],
    correctAnswer: "Sleeping Beauty",
  },
  {
    question: "Who is the princess with magical ice powers in Disney's Frozen?",
    choices: ["Ursula", "Ariel", "Elsa"],
    correctAnswer: "Elsa",
  },
  {
    question: "Which clownfish is the main character in Pixar's Finding Nemo?",
    choices: ["Dory", "Nemo", "Marlin"],
    correctAnswer: "Nemo",
  },
  {
    question:
      "What is the name of the forgetful fish in Pixar's Finding Nemo and Finding Dory?",
    choices: ["Dory", "Nemo", "Marlin"],
    correctAnswer: "Dory",
  },
  {
    question:
      "Who is the young lion cub and the protagonist of Disney's The Lion King?",
    choices: ["Garfield", "CatDog", "Simba"],
    correctAnswer: "Simba",
  },
  {
    question:
      "Which character from DreamWorks' Shrek is an ogre with a Scottish accent?",
    choices: ["Robin Hood", "Lord Farquaad", "Shrek"],
    correctAnswer: "Shrek",
  },
  {
    question:
      "Who is the adventurous young girl who discovers a hidden world in Studio Ghibli's Spirited Away?",
    choices: ["Chihiro Ogino", "Yubaba", "Haku"],
    correctAnswer: "Chihiro Ogino",
  },
  {
    question: "Who is the famous cartoon mouse created by Walt Disney?",
    choices: ["Mickey Mouse", "Jerry", "Woody"],
    correctAnswer: "Mickey Mouse",
  },
  {
    question:
      "Which superhero, with the alter ego Peter Parker, swings through New York City in Marvel's Spider-Man series?",
    choices: ["Ryder", "Spider-Man", "Captain Man"],
    correctAnswer: "Spider-Man",
  },
  {
    question: "What is the name of the friendly snowman in Disney's Frozen?",
    choices: ["Olaf", "Bulda", "Hans"],
    correctAnswer: "Olaf",
  },
  {
    question:
      "Which character, voiced by Tom Hanks, is the main toy in Pixar's Toy Story series?",
    choices: ["Mickey Mouse", "Jerry", "Woody"],
    correctAnswer: "Woody",
  },
  {
    question: "What type of animal is Sandy Cheeks?",
    choices: ["Cat", "Squirrel", "Fishstar"],
    correctAnswer: "Squirrel",
  },
  {
    question: "What series has characters named Arnold, Helgam, and Gerald?",
    choices: ["The Flintstones", "Hey Arnold!", "SpongeBob SquarePants"],
    correctAnswer: "Hey Arnold!",
  },
  {
    question: "Which character is known to wear a pink hat and has buck teeth?",
    choices: ["Timmy Turner", "Cosmo", "Tammy Turner"],
    correctAnswer: "Timmy Turner",
  },
  {
    question:
      "What animated series is about a cat and a dog enjoined together at birth?",
    choices: ["Garfield", "CatDog", "Simba"],
    correctAnswer: "CatDog",
  },
  {
    question: "Who is the main character in Dora the Explorer?",
    choices: ["Dora", "Diego", "Boots"],
    correctAnswer: "Dora",
  },
  {
    question:
      "Which character in The Legend of Korra is the successor of Aang?",
    choices: ["Katara", "Aang", "Korra"],
    correctAnswer: "Korra",
  },
  {
    question: "Who is the main character in Paw Patrol?",
    choices: ["Ryder", "Spider-Man", "Captain Man"],
    correctAnswer: "Ryder",
  },
  {
    question: "Who is the main character in The Penguins of Madagascar?",
    choices: ["King Julien", "Rico", "Skipper"],
    correctAnswer: "Skipper",
  },
  {
    question:
      "What is the name of the animated superhero in The Adventures of Kid Danger?",
    choices: ["Ryder", "Spider-Man", "Captain Man"],
    correctAnswer: "Captain Man",
  },
  {
    question: "Who is the villainous sea witch in Disney's The Little Mermaid?",
    choices: ["Ursula", "Ariel", "Elsa"],
    correctAnswer: "Ursula",
  },
];

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showStartPage, setShowStartPage] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleStartGame = () => {
    setShowStartPage(false);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setFeedback("");
    setFeedbackColor("");
    setShowFeedback(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleResetGame = () => {
    setSelectedAnswer(null);
    setFeedback("");
    setFeedbackColor("");
    setShowFeedback(false);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (userAnswer: string) => {
    if (selectedAnswer === null) {
      const correctAnswer =
        questionsAndAnswers[currentQuestionIndex].correctAnswer;
      setSelectedAnswer(userAnswer);
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        setScore((prevScore) => prevScore + 1);
        setFeedback("Correct!");
        setFeedbackColor("lime");
      } else {
        setFeedback("Wrong!");
        setFeedbackColor("crimson");
      }
      setShowFeedback(true);
    }
  };

  return (
    <div className="App">
      {showStartPage ? (
        <div className="start-page">
          <h1>Welcome to Who Wants to Be a Cartoonaire!</h1>
          <button onClick={handleStartGame}>Start</button>
        </div>
      ) : (
        <div>
          <header>
            <h1>Who Wants to Be a Cartoonaire?</h1>
            <p>Score: {score}</p>
          </header>

          {currentQuestionIndex < questionsAndAnswers.length ? (
            <div>
              <h2>
                Question {currentQuestionIndex + 1} of{" "}
                {questionsAndAnswers.length}
              </h2>
              <Question
                questionData={questionsAndAnswers[currentQuestionIndex]}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
              />
              {showFeedback && (
                <div className="feedback">
                  <span style={{ color: feedbackColor }}>{feedback}</span>
                </div>
              )}
              <div className="nav-buttons">
                <button onClick={handleNextQuestion}>Next</button>
                <button onClick={handleResetGame}>Restart</button>
              </div>
            </div>
          ) : (
            <div className="game-over">
              <h2>Game Finished</h2>
              <p>
                Final score: {score} / {questionsAndAnswers.length} (
                {((score / questionsAndAnswers.length) * 100).toFixed(2)}%)
              </p>
              {score >= questionsAndAnswers.length * 0.8 ? (
                <p>Congratulations! You're a cartoon mastermind!</p>
              ) : score >= questionsAndAnswers.length * 0.5 ? (
                <p>Good job! You're a cartoon enthusiast!</p>
              ) : (
                <p>
                  Don't worry, you can always try again and improve your cartoon
                  knowledge!
                </p>
              )}
              <div className="nav-buttons">
                <button onClick={handleResetGame}>Play Again</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

