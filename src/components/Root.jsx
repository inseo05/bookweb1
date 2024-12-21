import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Root.css";

const Root = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonLoginClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={`root1 ${className}`}>
      <section className="rectangle-parent16">
        <div className="frame-child21" />
        <div className="logo-1" />
        <div className="frame-wrapper8">
          <div className="sprout-parent">
            <img
              className="sprout-icon1"
              loading="lazy"
              alt=""
              src="/sprout@2x.png"
            />
            <h1 className="grus1">grus</h1>
          </div>
        </div>
        <div className="ant-designheart-filled1" />
        <div className="frame-wrapper9">
          <div className="frame-parent14">
            <div className="wrapper1">
              <div className="div20">새싹캠프 새싹핑입니다!</div>
            </div>
            <div className="div21">동방 책 빌리고 싶으면 로그인 해라 새싹!</div>
          </div>
        </div>
        <div className="user-form">
          <div className="profile-info2">
            <div className="name-and-i-d">
              <div className="div22">이름</div>
              <div className="user-input">
                <div className="usernamecollegenameacin">
                  username@collegename.ac.in
                </div>
              </div>
            </div>
            <div className="name-and-i-d">
              <div className="div22">{`학번 `}</div>
              <div className="frame-parent15">
                <div className="frame-wrapper10">
                  <div className="ellipse-parent">
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                    <div className="ellipse-div" />
                  </div>
                </div>
                <img
                  className="eye-off"
                  loading="lazy"
                  alt=""
                  src="/eye--off.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="button-login1" onClick={onButtonLoginClick}>
          <div className="div24">회원 확인</div>
        </div>
      </section>
    </div>
  );
};

Root.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Root;
