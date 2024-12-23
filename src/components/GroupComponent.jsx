import { useMemo } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "", frameDivHeight }) => {
  const navigate = useNavigate(); // useNavigate 훅 초기화

  const frameDiv2Style = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const handleRentClick = () => {
    navigate("/2"); // "/2" 경로로 이동
  };

  return (
    <div className={`rectangle-parent24 ${className}`}>
      <div className="frame-child38" />
      <div className="book-one-content">
        <img
          className="book-one-content-child"
          loading="lazy"
          alt=""
          src="/rectangle-16@2x.png"
        />
        <div className="book-one-details">
          <div className="book-one-title-author">
            <div className="dont-make-me4">{`Don’t Make Me Think `}</div>
            <div className="steve-krug-20004">Steve Krug, 2000</div>
          </div>
          <div className="second-edition">Second Edition</div>
        </div>
      </div>
      <div className="frame-child39" style={frameDiv2Style} />
      <div className="additional-book-actions">
        <div className="additional-action-container">
          <div className="action-buttons">
            <div className="rectangle-parent25" onClick={handleRentClick}>
              <div className="frame-child40" />
              <div className="div31">대여하기</div>
            </div>
          </div>
          <div className="additional-action-container-inner">
            <div className="frame-child41" />
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivHeight: PropTypes.string,
};

export default GroupComponent;
