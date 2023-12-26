import styles from "./Button.module.css";
import PropTypes from "prop-types"
const Button = (props) => {
  const {isOutline, text,showfunc} = props;
  return (
    <button className={isOutline?styles.outline_btn:styles.primary_btn} onClick={isOutline?showfunc:""}>{text}</button>
  )
}

Button.propTypes = {
  isOutline: PropTypes.bool,
  text: PropTypes.string,
};
export default Button