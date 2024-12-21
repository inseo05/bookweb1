import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Root2.css";

const Root2 = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`root2 ${className}`}>
      <section className="rectangle-parent17">
        <div className="frame-child29" />
        <div className="rental-message">
          <div className="div25">대여가 완료되었습니다</div>
          <div className="success-icon">
            <img className="icon" loading="lazy" alt="" src="/vector31.svg" />
          </div>
        </div>
        <div className="navigation">
          <button className="rectangle-parent18" onClick={onGroupButtonClick}>
            <div className="frame-child30" />
            <div className="back">{`Back `}</div>
          </button>
        </div>
      </section>
    </div>
  );
};

Root2.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Root2;
