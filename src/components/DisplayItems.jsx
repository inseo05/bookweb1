import { useMemo } from "react";
import PropTypes from "prop-types";
import "./DisplayItems.css";

const DisplayItems = ({
  className = "",
  rectangle12,
  frameDivAlignSelf,
  theDesignOfEvery,
  theDesignOfAlignSelf,
  donNorman1988,
  donNorman1988Width,
  donNorman1988Display,
  donNorman1988AlignSelf,
  donNorman1988MinWidth,
  prop,
  frameDivAlignSelf1,
}) => {
  const theDesignOf1Style = useMemo(() => {
    return {
      alignSelf: theDesignOfAlignSelf,
    };
  }, [theDesignOfAlignSelf]);

  const donNorman19881Style = useMemo(() => {
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

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivAlignSelf1]);

  return (
    <div className={`display-items ${className}`}>
      <img className="display-items-child" alt="" src={rectangle12} />
      <div className="the-design-of-every-group" style={frameDiv1Style}>
        <div className="the-design-of1" style={theDesignOf1Style}>
          {theDesignOfEvery}
        </div>
        <div className="don-norman-19881" style={donNorman19881Style}>
          {donNorman1988}
        </div>
        <div className="don-norman-19881">
          <span>{prop}</span>
          <span className="span2">/5</span>
        </div>
      </div>
    </div>
  );
};

DisplayItems.propTypes = {
  className: PropTypes.string,
  rectangle12: PropTypes.string,
  theDesignOfEvery: PropTypes.string,
  donNorman1988: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  frameDivAlignSelf: PropTypes.string,
  theDesignOfAlignSelf: PropTypes.string,
  donNorman1988Width: PropTypes.string,
  donNorman1988Display: PropTypes.string,
  donNorman1988AlignSelf: PropTypes.string,
  donNorman1988MinWidth: PropTypes.string,
  frameDivAlignSelf1: PropTypes.string,
};

export default DisplayItems;
