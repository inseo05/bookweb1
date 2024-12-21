import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BookAvailability1.css";

const BookAvailability1 = ({
  className = "",
  rectangle12,
  theDesignOfEvery,
  theDesignOfAlignSelf,
  donNorman1988,
  donNorman1988Width,
  donNorman1988Display,
  donNorman1988AlignSelf,
  donNorman1988MinWidth,
  frameDivAlignSelf,
}) => {
  const theDesignOfStyle = useMemo(() => {
    return {
      alignSelf: theDesignOfAlignSelf,
    };
  }, [theDesignOfAlignSelf]);

  const donNorman1988Style = useMemo(() => {
    return {
      width: donNorman1988Width,
      display: donNorman1988Display,
      alignSelf: donNorman1988AlignSelf,
      minWidth: donNorman1988MinWidth,
    };
  }, [
    donNorman1988Width,
    donNorman1988Display,
    donNorman1988AlignSelf,
    donNorman1988MinWidth,
  ]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  return (
    <div className={`book-availability1 ${className}`}>
      <img
        className="book-availability-child"
        loading="lazy"
        alt=""
        src={rectangle12}
      />
      <div className="frame-parent16">
        <div className="the-design-of-every-parent" style={frameDivStyle}>
          <div className="the-design-of" style={theDesignOfStyle}>
            {theDesignOfEvery}
          </div>
          <div className="don-norman-1988" style={donNorman1988Style}>
            {donNorman1988}
          </div>
        </div>
        <div className="frame-wrapper11">
          <div className="rectangle-parent20">
            <div className="frame-child33" />
            <div className="wrapper3">
              <div className="div27">대여가능</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BookAvailability1.propTypes = {
  className: PropTypes.string,
  rectangle12: PropTypes.string,
  theDesignOfEvery: PropTypes.string,
  donNorman1988: PropTypes.string,

  /** Style props */
  theDesignOfAlignSelf: PropTypes.string,
  donNorman1988Width: PropTypes.string,
  donNorman1988Display: PropTypes.string,
  donNorman1988AlignSelf: PropTypes.string,
  donNorman1988MinWidth: PropTypes.string,
  frameDivAlignSelf: PropTypes.string,
};

export default BookAvailability1;
