import PropTypes from "prop-types";
import "./OverdueBookItem.css";

const OverdueBookItem = ({
  className = "",
  pendingPlaceholder,
  theDesignOfEveryDayThings,
  donNorman1988,
}) => {
  return (
    <div className={`overdue-book-item ${className}`}>
      <div className="overdue-book-details">
        <img
          className="pending-placeholder-icon"
          alt=""
          src={pendingPlaceholder}
        />
        <div className="overdue-book-title-author">
          <div className="the-design-of2">{theDesignOfEveryDayThings}</div>
          <div className="don-norman-19882">{donNorman1988}</div>
        </div>
      </div>
      <div className="overdue-book-status">
        <div className="overdue-book-date">
          <div className="overdue-date">
            <div className="returned-from-user">
              <span>{`13 Mar 2023 `}</span>
              <span className="over-due1">(Over Due)</span>
            </div>
          </div>
          <div className="rectangle-parent33">
            <div className="frame-child53" />
            <div className="return">Return</div>
          </div>
        </div>
      </div>
    </div>
  );
};

OverdueBookItem.propTypes = {
  className: PropTypes.string,
  pendingPlaceholder: PropTypes.string,
  theDesignOfEveryDayThings: PropTypes.string,
  donNorman1988: PropTypes.string,
};

export default OverdueBookItem;
