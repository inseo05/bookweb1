import SideMenu from "./SideMenu";
import PropTypes from "prop-types";
import "./SideBar1.css";

const SideBar1 = ({ className = "" }) => {
  return (
    <div className={`side-bar2 ${className}`}>
      <div className="logo-container">
        <div className="logo-area">
          <img
            className="sprout-icon5"
            loading="lazy"
            alt=""
            src="/sprout@2x.png"
          />
          <h1 className="grus3">grus</h1>
        </div>
      </div>
      <div className="ant-designheart-filled3" />
      <SideMenu
        heroiconsMinihome="/heroiconsminihome1.svg"
        bookshelf="/bookshelf1.svg"
      />
    </div>
  );
};

SideBar1.propTypes = {
  className: PropTypes.string,
};

export default SideBar1;
