import BookAvailability from "../components/BookAvailability";
import BookAvailability1 from "../components/BookAvailability1";
import RecommendationItems from "../components/RecommendationItems";
import BookList1 from "../components/BookList1";
import TopMain from "../components/TopMain";
import SideBar from "../components/SideBar";
import "./Control.css";

const Control = () => {

    var id = 1;
    var listover = ["하은", "인성", "쏘영"];//여기다가 벡엔드 연체 리스트 불러오기
    var listrent = ["하은", "인성", "쏘영"];//여기다가 벡엔드 대여 리스트 불러오기
    var listcompliment = ["하은", "인성", "쏘영"];//여기다가 벡엔드 대여완료 리스트 불러오기


    return(<div className="manage">
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
        </div>);
        
}

export default Control;