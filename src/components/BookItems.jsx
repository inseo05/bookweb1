import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BookItems.css";

const BookItems = ({ className = "", frameDivHeight }) => {
  const frameDiv3Style = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  return (
    <div className={`book-items1 ${className}`}>
      <div className="rectangle-parent26">
        <div className="frame-child42" />
        <div className="rectangle-parent27">
          <img
            className="frame-child43"
            loading="lazy"
            alt=""
            src="/rectangle-16@2x.png"
          />
          <div className="frame-parent18">
            <div className="dont-make-me-think-group">
              <div className="dont-make-me5">{`Don’t Make Me Think `}</div>
              <div className="steve-krug-20005">Steve Krug, 2000</div>
            </div>
            <div className="second-edition1">Second Edition</div>
          </div>
        </div>
        <div className="frame-child44" style={frameDiv3Style} />
        <div className="frame-wrapper12">
          <div className="frame-parent19">
            <div className="frame-wrapper13">
              <div className="rectangle-parent28">
                <div className="frame-child45" />
                <div className="div32">대여하기</div>
              </div>
            </div>
            <div className="rectangle-frame">
              <div className="frame-child46" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookItems.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frameDivHeight: PropTypes.string,
};

export default BookItems;
