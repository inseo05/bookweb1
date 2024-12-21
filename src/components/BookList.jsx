import GroupComponent from "./GroupComponent";
import BookItems from "./BookItems";
import PropTypes from "prop-types";
import "./BookList.css";

const BookList = ({ className = "" }) => {
  return (
    <div className={`book-list2 ${className}`}>
      <div className="book-three">
        <div className="book-title-label">
          <div className="div33">제목</div>
        </div>
        <div className="book-availability2">
          <div className="wrapper4">
            <div className="div33">상태</div>
          </div>
          <div className="div35">반납일</div>
        </div>
      </div>
      <GroupComponent />
      <div className="rectangle-parent29">
        <div className="frame-child47" />
        <div className="rectangle-parent30">
          <img
            className="frame-child48"
            loading="lazy"
            alt=""
            src="/rectangle-16-1@2x.png"
          />
          <div className="frame-wrapper14">
            <div className="rich-dad-poor-dad-group">
              <div className="rich-dad-poor1">Rich Dad Poor Dad</div>
              <div className="robert-tkiyosaki-19973">
                Robert T.Kiyosaki, 1997
              </div>
            </div>
          </div>
        </div>
        <div className="frame-child49" />
        <div className="frame-wrapper15">
          <div className="frame-parent20">
            <div className="frame-wrapper16">
              <div className="rectangle-parent31">
                <div className="frame-child50" />
                <div className="div36">대여하기</div>
              </div>
            </div>
            <div className="rectangle-wrapper1">
              <div className="frame-child51" />
            </div>
          </div>
        </div>
      </div>
      <BookItems />
      <GroupComponent frameDivHeight="19px" />
      <BookItems frameDivHeight="57px" />
    </div>
  );
};

BookList.propTypes = {
  className: PropTypes.string,
};

export default BookList;
