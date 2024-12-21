import { useState, useCallback } from "react";
import Root2 from "./Root2";
import PortalPopup from "./PortalPopup";
import BORROW from "./BORROW";
import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={`rectangle-parent34 ${className}`}>
        <div className="frame-child54" />
        <div className="rectangle-parent35">
          <div className="frame-child55" />
          <b className="borrow-date-title">2024</b>
          <img
            className="return-date-title"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div className="rectangle-parent36">
          <div className="frame-child55" />
          <b className="b">22</b>
          <img
            className="vector-icon5"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div className="rectangle-parent37">
          <div className="frame-child55" />
          <b className="b1">11</b>
          <img
            className="vector-icon6"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div className="rectangle-parent38" onClick={openFrame}>
          <div className="frame-child58" />
          <BORROW />
        </div>
        <div className="frame-wrapper20">
          <div className="rectangle-parent39">
            <div className="frame-child55" />
            <b className="b">2024</b>
            <img
              className="vector-icon7"
              loading="lazy"
              alt=""
              src="/vector3.svg"
            />
          </div>
        </div>
        <div className="rectangle-parent40">
          <div className="frame-child55" />
          <b className="b2">21</b>
          <img
            className="vector-icon5"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
        <div className="frame-wrapper21">
          <div className="rectangle-parent39">
            <div className="frame-child55" />
            <b className="b1">11</b>
            <img
              className="vector-icon6"
              loading="lazy"
              alt=""
              src="/vector3.svg"
            />
          </div>
        </div>
        <div className="div43">빌리는 날짜</div>
        <div className="div44">날짜 입력</div>
        <div className="rectangle-parent42">
          <div className="frame-child62" />
          <div className="div45">{`반납 기한을 잘 지켜주세요.  `}</div>
        </div>
        <div className="div1">유의사항</div>
        <div className="div46">반납 날짜</div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root2 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
