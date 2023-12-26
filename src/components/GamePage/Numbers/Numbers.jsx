import styles from "./Numbers.module.css";
const Numbers = ({
  selectedNumber,
  setSelectedNumber,
  score,
  error,
  setError,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (num) => {
    setSelectedNumber(num);
    setError("");
  };
  return (
    <section className={styles.numbers_container}>
      <div className={styles.score}>
        <h1>{score}</h1>
        <p>Total Score</p>
      </div>
      <div className={styles.numbers_row}>
        <span className={styles.warning_span}>{error}</span>
        <div className={styles.numbers_div}>
          {numbers.map((num, index) => (
            <span
              key={index}
              className={
                num === selectedNumber
                  ? styles.activenumbers_btn
                  : styles.numbers_btn
              }
              onClick={() => numberSelectorHandler(num)}
            >
              {num}
            </span>
          ))}
        </div>
        <p style={{margin:"5px"}}>Selected Number : {selectedNumber}</p>
      </div>
    </section>
  );
};

export default Numbers;
