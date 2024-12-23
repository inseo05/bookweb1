import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate(); // useNavigate 초기화

  const handleRentClick = () => {
    navigate("/2"); // "/2" 경로로 이동
  };

  return (
    <div className={`search-area-parent ${className}`}>
      <div className="search-area">
        <div className="search-bar-container">
          <div className="quick-search-bar2">
            <div className="quick-search-bar-inner" />
            <div className="barcode-scanner" />
            <div className="search-input-area">
              <div className="search-input-area-inner">
                <div className="frame-child35" />
              </div>
              <div className="search-input-container1">
                <div className="search3">Search</div>
              </div>
            </div>
            <div className="search-filter">
              <div className="search-filter-dropdown">
                <img
                  className="search-icon4"
                  loading="lazy"
                  alt=""
                  src="/search1.svg"
                />
                <div className="search-filter-dropdown-child" />
              </div>
            </div>
          </div>
        </div>
        <div className="rectangle-parent22" >
          <div className="frame-child36" />
          <div className="div29"onClick={handleRentClick}>대여 가능</div>
          <div className="book-status-icon">
            <img
              className="browse-icon"
              loading="lazy"
              alt=""
              src="/polygon-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="book-details2">
        <div className="rectangle-parent23">
          <div className="frame-child37" />
          <div className="time-details">
            <img
              className="time-icon2"
              loading="lazy"
              alt=""
              src="/time1.svg"
            />
            <div className="hrs1">09:00 hrs</div>
          </div>
          <div className="time-details1">
            <img
              className="vector-icon4"
              loading="lazy"
              alt=""
              src="/vector1.svg"
            />
            <div className="hrs1">4-Mar-2023</div>
          </div>
        </div>
      </div>
      <div className="profile-account2">
        <div className="profile-account-inner" />
        <img
          className="profile-picture-icon1"
          loading="lazy"
          alt=""
          src="/ellipse-10@2x.png"
        />
        <div className="username-container">
          <div className="div30">새싹핑</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;