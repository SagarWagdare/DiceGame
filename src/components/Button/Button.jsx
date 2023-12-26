import styles from "./Button.module.css";
import PropTypes from "prop-types"
const Button = (props) => {
  const {isOutline, text,showfunc,resetScore} = props;
  return (
    <button className={isOutline?styles.outline_btn:styles.primary_btn} onClick={isOutline?showfunc:"" || text === "Reset Scores"? resetScore:""}>{text}</button>
  )
}

Button.propTypes = {
  isOutline: PropTypes.bool,
  text: PropTypes.string,
};
export default Button