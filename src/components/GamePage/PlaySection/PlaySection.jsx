import styles from "./PlaySection.module.css";
import dice from "../../../assets/images/dice_1.png";
import Button from "../../Button/Button";
import { useState } from "react";

const PlaySection = () => {
  const [showRules, setShowRules] = useState(false);
const showfunc = ()=>{
  setShowRules(!showRules)
}
  return (
    <section className={styles.playsection_div}>
      <img src={dice} alt="" />
      <p>Click on Dice to roll</p>
      <div className={styles.button_div}>
        <Button text="Reset Scores" />

        <Button text="Show Rules" isOutline={true} showfunc={showfunc} />
      </div>
      {showRules ? (
        <div className={styles.instructions_div}>
          <h2>How to play dice game</h2>
          <ul >
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              after click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </li>
            <li>if you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </div>
      ) : null}
    </section>
  );
};

export default PlaySection;
