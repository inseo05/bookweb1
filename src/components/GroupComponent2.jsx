import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  const handleBorrowComplete = () => {
    navigate("/rentalcomplete");
  };

  return (
    <div className={`rectangle-parent34 ${className}`}>
      {/* 제목 */}
      <div className="form-title">날짜 입력</div>

      {/* 날짜 선택 섹션 */}
      <div className="date-container">
        <div className="date-section">
          <label className="date-label">빌리는 날짜</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="date-picker"
            popperPlacement="bottom-start"
            popperClassName="custom-datepicker-popper" // 사용자 정의 클래스 추가
          />
        </div>

        <div className="date-section">
          <label className="date-label">반납 날짜</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="date-picker"
            popperPlacement="bottom-start"
            popperClassName="custom-datepicker-popper" // 사용자 정의 클래스 추가
          />
        </div>
      </div>

      {/* 버튼 */}
      <button className="borrow-button" onClick={handleBorrowComplete}>
        대여완료
      </button>

      {/* 유의사항 */}
      <div className="div1">유의사항</div>
      <div className="rectangle-parent42">
        <div className="div45">반납 기한을 잘 지켜주세요.</div>
      </div>
    </div>
  );
};

export default GroupComponent2;
