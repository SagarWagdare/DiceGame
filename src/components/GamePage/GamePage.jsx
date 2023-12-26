import { useState } from "react";
import styles from "./GamePage.module.css";
import Numbers from "./Numbers/Numbers";
import PlaySection from "./PlaySection/PlaySection";
const GamePage = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === currentDice) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <>
      <Numbers
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        score={score}
        error={error}
        setError={setError}
      />
      <PlaySection
        currentDice={currentDice}
        setCurrentDice={setCurrentDice}
        roleDice={roleDice}
        setScore={setScore}
        setSelectedNumber={setSelectedNumber}
      />
    </>
  );
};

export default GamePage;
