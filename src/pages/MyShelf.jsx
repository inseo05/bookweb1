import {useState}from "react"
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";
import "./MyShelf.css";

const MyShelf = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/returncomplete");
  };
  return (
    <div className="my-shelf">
      <main className="main-area-wrapper">
        <section className="main-area2">
          <div className="book-item-parent">
            <div className="book-item1">
              <div className="book-item-child" />
              <div className="book-details1">
                <div className="book-info">
                  <img
                    className="book-info-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-121@2x.png"
                  />
                  <div className="dont-make-me">The Design of Every..</div>
                  <div className="steve-krug-2000">Don Norman, 1988</div>
                  <button className="rectangle-group">
                    <div className="rectangle-div" />
                    <div className="borrowed">대여중</div>
                  </button>
                  <button className="rectangle-container" onClick={handleReturnClick}>
                    <div className="rectangle-div" />
                    <div className="return">반납하기</div>
                  </button>
                  <div className="div1">빌린 날짜</div>
                  <div className="mar-2023-0900">2 Mar 2023 09:00 AM</div>
                  <div className="mar-2023">13 Mar 2023</div>
                  <div className="div2">반납 날짜</div>
                </div>
                <div className="book-info1">
                  <img
                    className="book-info-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-12-12@2x.png"
                  />
                  <div className="dont-make-me">{`Java Script Scope & ..`}</div>
                  <div className="kyle-simpson-2014">Kyle Simpson, 2014</div>
                  <button className="rectangle-group">
                    <div className="rectangle-div" />
                    <div className="borrowed">대여중</div>
                  </button>
                  <button className="rectangle-container" onClick={handleReturnClick}>
                    <div className="rectangle-div" />
                    <div className="return">반납하기</div>
                  </button>
                  <div className="div1">{`반납 날짜 `}</div>
                  <div className="mar-2023-0900">2 Mar 2023 09:00 AM</div>
                  <div className="mar-2023-container">
                    <span>{`13 Mar 2023 `}</span>
                    <span className="span">)</span>
                  </div>
                  <div className="div2">빌린 날짜</div>
                </div>
                <div className="book-info2">
                  <img
                    className="book-info-inner"
                    loading="lazy"
                    alt=""
                    src="/rectangle-12-24@2x.png"
                  />
                  <div className="dont-make-me">Sprint : Solve Big Pro..</div>
                  <div className="robert-tkiyosaki-1997">
                    Robert T.Kiyosaki, 1997
                  </div>
                  <div className="div1">{`반납 날짜 `}</div>
                  <div className="mar-2023-09002">11 Mar 2023 09:00 AM</div>
                  <div className="mar-2023">14 Mar 2023</div>
                  <div className="div2">빌린 날짜</div>
                  <button className="rectangle-parent1">
                    <div className="frame-child4" />
                    <div className="borrowed">반납 완료</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-main">
              <div className="quick-search-bar-parent">
                <div className="quick-search-bar">
                  <div className="quick-search-bar-child" />
                  <div className="frame-parent">
                    <div className="rectangle-wrapper">
                      <div className="frame-child5" />
                    </div>
                    <input
                      className="search-input-container"
                      placeholder="Search"
                      type="text"
                    />
                  </div>
                  <div className="search-button-container-wrapper">
                    <div className="search-button-container">
                      <img className="search-icon" alt="" src="/search1.svg" />
                      <div className="search-button-container-child" />
                    </div>
                  </div>
                </div>
                <div className="profile-container-parent">
                  <div className="profile-container">
                    <div className="rectangle-parent2">
                      <div className="frame-child6" />
                      <div className="profile-info">
                        <img
                          className="time-icon"
                          loading="lazy"
                          alt=""
                          src="/time2.svg"
                        />
                        <div className="hrs">09:00 hrs</div>
                      </div>
                      <div className="profile-info1">
                        <img
                          className="vector-icon1"
                          loading="lazy"
                          alt=""
                          src="/vector2.svg"
                        />
                        <div className="hrs">4-Mar-2023</div>
                      </div>
                    </div>
                  </div>
                  <div className="profile-account">
                    <div className="profile-account-child" />
                    <div className="profile-picture-parent">
                      <img
                        className="profile-picture-icon"
                        loading="lazy"
                        alt=""
                        src="/ellipse-10@2x.png"
                      />
                      <div className="wrapper">
                        <div className="div8">새싹핑</div>
                      </div>
                    </div>
                    <div className="profile-icon-wrapper">
                      <img
                        className="profile-icon"
                        loading="lazy"
                        alt=""
                        src="/polygon-11.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shelf-header">
              <div className="your-shelf-parent">
                <h2 className="your-shelf">
                  <span>{`Your `}</span>
                  <span className="shelf">Shelf</span>
                </h2>
                <div className="book-list">
                  
                </div>
              </div>
            </div>
          </div>
          
          <div className="side-bar-frame" />
        </section>
      </main>
      <div className="background1">
        <img className="bg-vector-icon2" alt="" src="/bg-vector2.svg" />
        <SideBar />
      </div>
    </div>
  );
};

export default MyShelf;
