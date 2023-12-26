import styles from "./MainPage.module.css";
import diceImage from "../../assets/images/dices.png";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src={diceImage} className={styles.image} alt="Dices Image" />
      </div>

      <div className={styles.text}>
        <h1>DICE GAME</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <NavLink to={"/game-page"}>

          <Button text="Play now" />

          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
