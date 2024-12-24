import { useNavigate } from "react-router-dom"; // useNavigate 추가
import PropTypes from "prop-types";
import "./Root1.css";

const Root1 = ({ className = "" }) => {
  const navigate = useNavigate(); // useNavigate 초기화

  // Login 버튼 클릭 시 호출될 함수
  const handleLoginClick = () => {
    navigate("/"); // "/" 경로로 이동
  };

  return (
    <div className={`root ${className}`}>
      <section className="group-section">
        <div className="frame-child20" />
        <div className="email" />
        <div className="frame-wrapper7">
          <div className="frame-parent13">
            <div className="verification-wrapper">
              <div className="verification">로그인 성공</div>
            </div>
            <div className="thank-you">감사합니다</div>
          </div>
        </div>
        <div className="vector-wrapper">
          <img
            className="vector-icon2"
            loading="lazy"
            alt=""
            src="/vector31.svg"
          />
        </div>
        {/* Login 버튼 */}
        <div className="button-login" onClick={handleLoginClick}>
          <div className="login1">Home</div>
        </div>
      </section>
    </div>
  );
};

Root1.propTypes = {
  className: PropTypes.string,
};

export default Root1;
