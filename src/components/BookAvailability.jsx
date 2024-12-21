import Component1 from "./Component1";
import PropTypes from "prop-types";
import "./BookAvailability.css";

const BookAvailability = ({ className = "", rectangle12 }) => {
  return (
    <div className={`book-availability ${className}`}>
      <div className="book-availability-inner">
        <img
          className="frame-child31"
          loading="lazy"
          alt=""
          src={rectangle12}
        />
      </div>
      <div className="book-info-grid">
        <div className="book-title-row1">
          <div className="dont-make-me3">Don’t Make Me think</div>
          <div className="steve-krug-20003">Steve Krug, 2000</div>
        </div>
        <div className="book-status-grid">
          <div className="rectangle-parent19">
            <div className="frame-child32" />
            <div className="wrapper2">
              <Component1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookAvailability.propTypes = {
  className: PropTypes.string,
  rectangle12: PropTypes.string,
};

export default BookAvailability;
