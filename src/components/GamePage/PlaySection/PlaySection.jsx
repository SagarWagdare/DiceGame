import styles from "./PlaySection.module.css";
import Button from "../../Button/Button";
import { useState } from "react";

const PlaySection = ({currentDice, setCurrentDice,roleDice,setScore,setSelectedNumber}) => {
  const [showRules, setShowRules] = useState(false);

  const showfunc = () => {
    setShowRules(!showRules);
  };

  const resetScore = ()=>{
    setScore(0)
    setCurrentDice(1)
    setSelectedNumber(undefined)
  }

  return (
    <section className={styles.playsection_div}>
      <div onClick={roleDice} style={{ cursor: "pointer" }}>
        <img src={`src/assets/images/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
      <div className={styles.button_div}>
        <Button text="Reset Scores" resetScore={resetScore}/>

        <Button text="Show Rules" isOutline={true} showfunc={showfunc} />
      </div>
      {showRules ? (
        <div className={styles.instructions_div}>
          <h2>How to play dice game</h2>
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice
            </li>
            <li>if you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default PlaySection;
