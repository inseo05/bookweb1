import PropTypes from "prop-types";
import "./MyShelf1.css";

const MyShelf1 = ({ className = "", myShelf }) => {
  return <h1 className={`my-shelf1 ${className}`}>{myShelf}</h1>;
};

MyShelf1.propTypes = {
  className: PropTypes.string,
  myShelf: PropTypes.string,
};

export default MyShelf1;
