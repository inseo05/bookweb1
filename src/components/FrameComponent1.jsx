import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({
  className = "",
  requestPlaceholder,
  theDesignOfEveryDayThings,
  donNorman1988,
}) => {
  return (
    <div className={`request-placeholder-parent ${className}`}>
      <img
        className="request-placeholder-icon"
        alt=""
        src={requestPlaceholder}
      />
      <div className="book-title-author">
        <div className="the-design-of">{theDesignOfEveryDayThings}</div>
        <div className="don-norman-1988">{donNorman1988}</div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  requestPlaceholder: PropTypes.string,
  theDesignOfEveryDayThings: PropTypes.string,
  donNorman1988: PropTypes.string,
};

export default FrameComponent1;
