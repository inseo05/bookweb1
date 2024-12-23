import { useNavigate } from "react-router-dom";
import "./MyShelf.css";

const BookItem = ({ title, author, imgSrc, borrowedDate, returnDate, status, onReturn }) => (
  <div className="book-item">
    <img className="book-cover" src={imgSrc} alt={`${title} cover`} />
    <div className="book-details">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <p className="book-dates">
        <span>빌린 날짜: {borrowedDate}</span> | <span>반납 날짜: {returnDate}</span>
      </p>
      <button className={`btn ${status === "returned" ? "completed" : "borrowed"}`}>
        {status === "returned" ? "반납 완료" : "대여중"}
      </button>
      {status !== "returned" && (
        <button className="btn return" onClick={onReturn}>
          반납하기
        </button>
      )}
    </div>
  </div>
);

const MyShelf = () => {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate("/returncomplete");
  };

  const books = [
    {
      title: "Don’t Make Me Think",
      author: "Steve Krug, 2000",
      imgSrc: "/rectangle-121@2x.png",
      borrowedDate: "2 Mar 2023",
      returnDate: "13 Mar 2023",
      status: "borrowed",
    },
    {
      title: "JavaScript Scope & Closures",
      author: "Kyle Simpson, 2014",
      imgSrc: "/rectangle-12-12@2x.png",
      borrowedDate: "2 Mar 2023",
      returnDate: "13 Mar 2023",
      status: "borrowed",
    },
    {
      title: "Sprint: Solve Big Problems",
      author: "Robert T.Kiyosaki, 1997",
      imgSrc: "/rectangle-12-24@2x.png",
      borrowedDate: "11 Mar 2023",
      returnDate: "14 Mar 2023",
      status: "returned",
    },
  ];

  return (
    <div className="my-shelf">
      <header className="header">
        <h2>Your Shelf</h2>
      </header>
      <main className="main-content">
        {books.map((book, index) => (
          <BookItem key={index} {...book} onReturn={handleReturnClick} />
        ))}
      </main>
    </div>
  );
};

export default MyShelf;
