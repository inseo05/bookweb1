import PropTypes from "prop-types";
import "./TopMain.css";

const TopMain = ({ className = "" }) => {
  return (
    <div className={`top-main1 ${className}`}>
      <div className="search-bar-and-profile">
        <div className="quick-search-bar1">
          <div className="quick-search-bar-item" />
          <div className="search-input">
            <h1 className="search1">Search</h1>
          </div>
          <div className="search-icon1">
            <img
              className="search-icon2"
              loading="lazy"
              alt=""
              src="/search.svg"
            />
            <div className="divider" />
          </div>
        </div>
        <div className="frame-parent17">
          <div className="rectangle-parent21">
            <div className="frame-child34" />
            <div className="date-time-info">
              <img
                className="time-icon1"
                loading="lazy"
                alt=""
                src="/time.svg"
              />
              <div className="am">09:00 AM</div>
            </div>
            <div className="date-time-info1">
              <img
                className="vector-icon3"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="am">4-Mar-2023</div>
            </div>
          </div>
          <div className="profile-account1">
            <div className="profile-account-item" />
            <div className="profile-image">
              <img
                className="avatar-icon"
                loading="lazy"
                alt=""
                src="/ellipse-10@2x.png"
              />
              <div className="profile-name">
                <h1 className="search1">새싹핑</h1>
              </div>
            </div>
            <div className="notification">
              <img
                className="bell-icon"
                loading="lazy"
                alt=""
                src="/polygon-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TopMain.propTypes = {
  className: PropTypes.string,
};

export default TopMain;
