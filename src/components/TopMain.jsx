import PropTypes from "prop-types";
import { useState } from "react";
import "./TopMain.css";

const TopMain = ({ className = "" }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    // 예시 검색 결과 필터링 (임시 데이터 사용)
    const dummyData = [
      "React Basics",
      "JavaScript Essentials",
      "Advanced CSS Techniques",
      "Web Development with React",
      "Search Functionality Implementation",
    ];

    // 검색 필터링
    const results = dummyData.filter((item) =>
      item.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className={`top-main1 ${className}`}>
      <div className="search-bar-and-profile">
        <div className="quick-search-bar1">
          <div className="quick-search-bar-item" />
          <div className="search-input">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
              className="search-text-input"
            />
          </div>
          <div className="search-icon1" onClick={handleSearch}>
            <img
              className="search-icon2"
              loading="lazy"
              alt="Search Icon"
              src="/search.svg"
            />
          </div>
        </div>
        <div className="frame-parent17">
          <div className="rectangle-parent21">
            <div className="frame-child34" />
            <div className="date-time-info">
              <img
                className="time-icon1"
                loading="lazy"
                alt=""
                src="/time.svg"
              />
              <div className="am">09:00 AM</div>
            </div>
            <div className="date-time-info1">
              <img
                className="vector-icon3"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="am">4-Mar-2023</div>
            </div>
          </div>
          <div className="profile-account1">
            <div className="profile-account-item" />
            <div className="profile-image">
              <img
                className="avatar-icon"
                loading="lazy"
                alt=""
                src="/ellipse-10@2x.png"
              />
              <div className="profile-name">
                <h1 className="search1">새싹핑</h1>
              </div>
            </div>
            <div className="notification">
              <img
                className="bell-icon"
                loading="lazy"
                alt=""
                src="/polygon-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 검색 결과 출력 */}
      <div className="search-results">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li key={index} className="search-result-item">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          searchInput && <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

TopMain.propTypes = {
  className: PropTypes.string,
};

export default TopMain;
