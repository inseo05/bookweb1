import PropTypes from "prop-types";
import "./Component1.css";

const Component1 = ({ className = "" }) => {
  return <div className={`div26 ${className}`}>대여가능</div>;
};

Component1.propTypes = {
  className: PropTypes.string,
};

export default Component1;
