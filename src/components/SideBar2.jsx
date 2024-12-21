import SideMenu from "./SideMenu";
import PropTypes from "prop-types";
import "./SideBar2.css";

const SideBar2 = ({ className = "" }) => {
  return (
    <div className={`side-bar3 ${className}`}>
      <div className="logo-container1">
        <div className="logo">
          <img
            className="sprout-icon7"
            loading="lazy"
            alt=""
            src="/sprout@2x.png"
          />
          <a className="grus5">grus</a>
        </div>
      </div>
      <SideMenu
        heroiconsMinihome="/heroiconsminihome2.svg"
        homeTextDecoration="none"
        searchTextDecoration="none"
        bookshelf="/bookshelf2.svg"
      />
      <div className="ant-designheart-filled5" />
    </div>
  );
};

SideBar2.propTypes = {
  className: PropTypes.string,
};

export default SideBar2;
