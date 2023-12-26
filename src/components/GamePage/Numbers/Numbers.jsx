import { useState } from "react";
import styles from "./Numbers.module.css";
const Numbers = () => {
  const [selectedNumber, setSelectedNumber] = useState(0);
  console.log(selectedNumber);
  const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <section className={styles.numbers_container}>
      <div className={styles.score}>
        <h1>{selectedNumber}</h1>
        <p>Total Score</p>
      </div>
      <div className={styles.numbers_row}>
        <span className={styles.warning_span}>
          You have not selected any number
        </span>
        <div className={styles.numbers_div}>
          {numbers.map((num, index) => (
            <span
              key={index}
              className={styles.numbers_btn}
              onClick={() => setSelectedNumber(num)}
            >
              {num}
            </span>
          ))}
        </div>
        <p>Select Number</p>
      </div>
    </section>
  );
};

export default Numbers;
