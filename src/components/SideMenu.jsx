import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./SideMenu.css";

const SideMenu = ({
  className = "",
  heroiconsMinihome,
  homeTextDecoration,
  searchTextDecoration,
  bookshelf,
}) => {
  const homeStyle = useMemo(() => {
    return {
      textDecoration: homeTextDecoration,
    };
  }, [homeTextDecoration]);

  const searchStyle = useMemo(() => {
    return {
      textDecoration: searchTextDecoration,
    };
  }, [searchTextDecoration]);

  const navigate = useNavigate();

  // "Home" 클릭 시 "/" 경로로 이동
  const onHomeMenuContainerClick = useCallback(() => {
    navigate("/"); // "/ 경로로 이동
  }, [navigate]);

  const onMyShelfMenuClick = useCallback(() => {
    navigate("/my-shelf");
  }, [navigate]);

  const onPrimaryNavigationContainerClick = useCallback(() => {
    // "관리자 페이지" 이동 구현 필요 시 추가
  }, []);

  return (
    <div className={`side-menu2 ${className}`}>
      <div className="side-menu3">
        <div className="home-menu1" onClick={onHomeMenuContainerClick}>
          <img
            className="heroicons-minihome1"
            loading="lazy"
            alt=""
            src={heroiconsMinihome}
          />
          <div className="home2" style={homeStyle}>
            Home
          </div>
        </div>
        <div className="search-menu1">
          <img
            className="search-icon5"
            loading="lazy"
            alt=""
            src="/search-1.svg"
          />
          <div className="home2" style={searchStyle}>
            Search
          </div>
        </div>
        <div className="my-shelf-menu1" onClick={onMyShelfMenuClick}>
          <img
            className="bookshelf-icon1"
            loading="lazy"
            alt=""
            src={bookshelf}
          />
          <div className="home2">My Shelf</div>
        </div>
        <div
          className="primary-navigation"
          onClick={onPrimaryNavigationContainerClick}
        >
          <img
            className="sprout-icon4"
            loading="lazy"
            alt=""
            src="/sprout-1@2x.png"
          />
          <div className="home2">관리자 전용</div>
        </div>
        <div className="favourite-menu1" />
      </div>
    </div>
  );
};

SideMenu.propTypes = {
  className: PropTypes.string,
  heroiconsMinihome: PropTypes.string,
  bookshelf: PropTypes.string,

  /** Style props */
  homeTextDecoration: PropTypes.string,
  searchTextDecoration: PropTypes.string,
};

export default SideMenu;
