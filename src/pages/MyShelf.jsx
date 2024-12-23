import {useState}from "react"
import { useNavigate } from "react-router-dom";
import OverdueBookItem from "../components/OverdueBookItem";
import FrameComponent1 from "../components/FrameComponent1";
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
                  <div className="dont-make-me">Don’t Make Me think</div>
                  <div className="steve-krug-2000">Steve Krug, 2000</div>
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
                  <div className="book-items-parent">
                    <div className="book-items">
                      <img
                        className="book-items-child"
                        loading="lazy"
                        alt=""
                        src="/rectangle-12@2x.png"
                      />
                      <div className="book-data">
                        <div className="book-attributes">
                          <div className="container">
                            <div className="div9">빌린 날짜</div>
                          </div>
                          <div className="mar-2023-0900-am-wrapper">
                            <div className="mar-2023-09003">
                              11 Mar 2023 09:00 AM
                            </div>
                          </div>
                          <div className="frame-group">
                            <div className="parent">
                              <div className="rich-dad-poor">반납 날짜</div>
                              <div className="mar-20233">14 Mar 2023</div>
                            </div>
                            <button className="rectangle-parent3">
                              <div className="frame-child7" />
                              <div className="borrowed2">대여중</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="book-title-items-parent">
                      <div className="book-title-items">
                        <div className="book-title-row">
                          <div className="rich-dad-poor">
                            Don’t Make Me think
                          </div>
                          <div className="steve-krug-20001">
                            Steve Krug, 2000
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent4">
                        <div className="frame-child8" />
                        <div className="not-yet-available">반납하기</div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-container">
                    <div className="frame-div">
                      <img
                        className="book-items-child"
                        loading="lazy"
                        alt=""
                        src="/rectangle-12-41@2x.png"
                      />
                      <div className="frame-wrapper">
                        <div className="frame-parent1">
                          <div className="group">
                            <div className="div11">빌린 날짜</div>
                            <div className="mar-2023-09004">
                              11 Mar 2023 09:00 AM
                            </div>
                          </div>
                          <div className="book-attributes">
                            <div className="rich-dad-poor">반납 날짜</div>
                            <div className="mar-20233">14 Mar 2023</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent2">
                      <div className="rich-dad-poor-dad-parent">
                        <div className="rich-dad-poor">Rich Dad Poor Dad</div>
                        <div className="robert-tkiyosaki-19971">
                          Robert T.Kiyosaki, 1997
                        </div>
                      </div>
                      <div className="frame-wrapper1">
                        <button className="rectangle-parent5">
                          <div className="frame-child9" />
                          <div className="borrowed2">반납 완료</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="book-items-parent">
                    <div className="book-items">
                      <img
                        className="book-items-child"
                        loading="lazy"
                        alt=""
                        src="/rectangle-121@2x.png"
                      />
                      <div className="book-data">
                        <div className="frame-parent4">
                          <div className="frame-wrapper3">
                            <div className="borrowed-date-container">
                              <div className="div11">{`반납 날짜 `}</div>
                              <div className="mar-2023-09005">
                                2 Mar 2023 09:00 AM
                              </div>
                            </div>
                          </div>
                          <div className="parent">
                            <div className="rich-dad-poor">빌린 날짜</div>
                            <div className="mar-2023-over-container">
                              <span>{`13 Mar 2023 `}</span>
                              <span className="span">(Over Due)</span>
                            </div>
                          </div>
                          <button className="rectangle-parent3">
                              <div className="frame-child7" />
                              <div className="borrowed2">대여중</div>
                            </button>
                        </div>
                      </div>
                    </div>
                    <div className="book-title-items-parent">
                      <div className="book-title-items">
                        <div className="book-title-row">
                          <div className="rich-dad-poor">
                            Don’t Make Me think
                          </div>
                          <div className="steve-krug-20001">
                            Steve Krug, 2000
                          </div>
                        </div>
                      </div>
                      <div className="rectangle-parent4">
                        <div className="frame-child8" />
                        <div className="not-yet-available">Return</div>
                      </div>
                    </div>
                  </div>
                  <div className="book-items-parent">
                    <div className="book-items">
                      <img
                        className="book-items-child"
                        loading="lazy"
                        alt=""
                        src="/rectangle-12-24@2x.png"
                      />
                      <div className="book-data">
                        <div className="book-attributes">
                          <div className="container">
                            <div className="div9">{`반납 날짜 `}</div>
                          </div>
                          <div className="frame-parent8">
                            <div className="mar-2023-0900-am-container">
                              <div className="mar-2023-09003">
                                11 Mar 2023 09:00 AM
                              </div>
                            </div>
                            <div className="borrowed-date-container-wrapper">
                              <div className="borrowed-date-container">
                                <div className="rich-dad-poor">빌린 날짜</div>
                                <div className="mar-20233">14 Mar 2023</div>
                              </div>
                            </div>
                            <button className="rectangle-parent10">
                              <div className="frame-child14" />
                              <div className="borrowed2">연제 됨</div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="book-title-items-parent">
                      <div className="book-title-items">
                        <div className="book-title-row">
                          <div className="sprint-solve1">
                            Sprint : Solve Big Pro..
                          </div>
                          <div className="robert-tkiyosaki-19971">
                            Robert T.Kiyosaki, 1997
                          </div>
                        </div>
                      </div>
                      <button className="rectangle-parent11">
                        <div className="frame-child8" />
                        <div className="return4">Return</div>
                      </button>
                    </div>
                  </div>
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
