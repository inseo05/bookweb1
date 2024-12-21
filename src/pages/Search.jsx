import FrameComponent from "../components/FrameComponent";
import BookList from "../components/BookList";
import SideBar1 from "../components/SideBar1";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <img className="bg-vector-icon1" alt="" src="/bg-vector1.svg" />
      <div className="main-area1">
        <div className="main-area-child" />
        <FrameComponent />
        <div className="book-list-wrapper">
          <BookList />
        </div>
      </div>
      <div className="side-bar">
        <SideBar1 />
      </div>
    </div>
  );
};

export default Search;
