import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Frame from "./pages/Frame";
import Login from "./pages/Login";
import MyShelf from "./pages/MyShelf";
import Frame1 from "./pages/Frame1";
import Control from "./pages/Control";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // 페이지 이동할 때 화면 맨 위로 스크롤
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  // 현재 경로에 따라 페이지의 <title>과 메타 설명 설정
  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "홈 페이지";
        metaDescription = "홈 페이지 설명";
        break;
      case "/search":
        title = "검색 페이지";
        metaDescription = "검색 페이지 설명";
        break;
      case "/login":
        title = "로그인 페이지";
        metaDescription = "로그인 페이지 설명";
        break;
      case "/my-shelf":
        title = "내 책장";
        metaDescription = "내 책장 설명";
        break;
      case "/1":
        title = "프레임";
        metaDescription = "프레임 설명";
        break;
      case "/2":
        title = "프레임1";
        metaDescription = "프레임1 설명";
        break;
      case "/control":
        title = "관리자 페이지";
        metaDescription = "관리자 페이지 설명";
        break;
      default:
        title = "404";
        metaDescription = "페이지를 찾을 수 없습니다.";
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/2" element={<Frame1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/my-shelf" element={<MyShelf />} />
      <Route path="/1" element={<Frame />} />
      <Route path="/control" element={<Control />} />
    </Routes>
  );
}

export default App;
