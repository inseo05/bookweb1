import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Search1 from "./Search1";
import MyShelf1 from "./MyShelf1";
import PropTypes from "prop-types";
import "./SideBar.css";

const SideBar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeMenuContainerClick = useCallback(() => {
    // Please sync "Home" to the project
  }, []);

  const onSearchMenuContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onMenuItemsContainerClick = useCallback(() => {
    navigate("/control");
  }, [navigate]);

  return (
    <div className={`side-bar1 ${className}`}>
      <div className="green-land">
        <img
          className="sprout-icon2"
          loading="lazy"
          alt=""
          src="/sprout@2x.png"
        />
        <a className="grus2">grus</a>
        <div className="ant-designheart-filled2" />
      </div>
      <div className="navigation1">
        <div className="side-menu">
          <div className="side-menu1">
            <div className="home-menu" onClick={onHomeMenuContainerClick}>
              <img
                className="heroicons-minihome"
                loading="lazy"
                alt=""
                src="/heroiconsminihome.svg"
              />
              <a className="home1">Home</a>
            </div>
            <div className="search-menu" onClick={onSearchMenuContainerClick}>
              <img
                className="search-icon3"
                loading="lazy"
                alt=""
                src="/search-1.svg"
              />
              <Search1 searchHref="/Search" />
            </div>
            <div className="my-shelf-menu" onClick={onMyShelfMenuClick}>
              <img
                className="bookshelf-icon"
                loading="lazy"
                alt=""
                src="/bookshelf.svg"
              />
              <MyShelf1 myShelf="My Shelf" />
            </div>
            <div className="menu-items" onClick={onMenuItemsContainerClick}>
              <img
                className="sprout-icon3"
                loading="lazy"
                alt=""
                src="/sprout-1@2x.png"
              />
              <h1 className="h13">관리자 전용</h1>
            </div>
            <div className="favourite-menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  className: PropTypes.string,
};

export default SideBar;
