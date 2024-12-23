import { useState, useCallback } from "react";
import Root from "./Root";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({ className = "" }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [name, setName] = useState("");  // 이름 상태
  const [studentId, setStudentId] = useState("");  // 학번 상태

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value); // 이름 변경 함수
  };

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value); // 학번 변경 함수
  };

  return (
    <>
      <div className={`rectangle-parent32 ${className}`}>
        <div className="frame-child52" />
        <div className="logo-11" />
        <div className="frame-wrapper17">
          <div className="sprout-group">
            <img
              className="sprout-icon6"
              loading="lazy"
              alt=""
              src="/sprout@2x.png"
            />
            <h1 className="grus4">grus</h1>
          </div>
        </div>
        <div className="ant-designheart-filled4" />
        <div className="frame-wrapper18">
          <div className="frame-parent21">
            <div className="wrapper5">
              <div className="div38">새싹캠프 새싹핑입니다!</div>
            </div>
            <div className="div39">동방 책 빌리고 싶으면 로그인 해라 새싹!</div>
          </div>
        </div>
        <div className="frame-wrapper19">
          <div className="email-password-parent">
            <div className="email-password">
              <div className="div">이름</div>
              <div className="input-fields">
                <input
                  type="text"
                  value={name} // 상태 값을 입력 필드에 바인딩
                  onChange={handleNameChange} // 값 변경시 상태 업데이트
                  placeholder="이름을 입력하세요"
                />
              </div>
            </div>
            <div className="email-password">
              <div className="div">{`학번 `}</div>
              <div className="frame-parent22">
                <input
                  type="text"
                  value={studentId} // 상태 값을 입력 필드에 바인딩
                  onChange={handleStudentIdChange} // 값 변경시 상태 업데이트
                  placeholder="학번을 입력하세요"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="input-fields1">
          <div className="button-login2">
            <div className="div41">회원 확인</div>
          </div>
          <div className="wrapper6" onClick={openFrame}>
            <div className="div42">새 멤버인가요?</div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
