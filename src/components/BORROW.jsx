import PropTypes from "prop-types";
import "./BORROW.css";

const BORROW = ({ className = "" }) => {
  return <div className={`borrow ${className}`}>BORROW</div>;
};

BORROW.propTypes = {
  className: PropTypes.string,
};

export default BORROW;
