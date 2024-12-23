import BookAvailability1 from "../components/BookAvailability1";
import TopMain from "../components/TopMain";
import SideBar from "../components/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="main-area">
        <section className="rectangle-parent">
          <div className="frame-child" />
          <div className="book-title">
            <h1 className="h1">대여 가능한 도서</h1>
          </div>
          <div className="book-details">
            <div className="book-grid">
              <div className="book-item">
                <div className="book-action">
                  <BookAvailability1
                    rectangle12="/rectangle-12-1@2x.png"
                    theDesignOfEvery="The Design of Every.."
                    donNorman1988="Don Norman, 1988"
                  />
                  <BookAvailability1
                    rectangle12="/rectangle-12-2@2x.png"
                    theDesignOfEvery="Sprint : How to solve..."
                    theDesignOfAlignSelf="unset"
                    donNorman1988="Jake Knapp, 2000"
                    donNorman1988Width="102px"
                    donNorman1988Display="inline-block"
                    donNorman1988AlignSelf="unset"
                    donNorman1988MinWidth="unset"
                    frameDivAlignSelf="unset"
                  />
                  <BookAvailability1
                    rectangle12="/rectangle-12-3@2x.png"
                    theDesignOfEvery="Learn UX : Design Gr..."
                    theDesignOfAlignSelf="unset"
                    donNorman1988="Jeff Gothelf, 2016"
                    donNorman1988Width="102px"
                    donNorman1988Display="inline-block"
                    donNorman1988AlignSelf="unset"
                    donNorman1988MinWidth="unset"
                    frameDivAlignSelf="unset"
                  />
                  <BookAvailability1
                    rectangle12="/rectangle-12-4@2x.png"
                    theDesignOfEvery="The Road to React"
                    theDesignOfAlignSelf="stretch"
                    donNorman1988="Steve Krug, 2000"
                    donNorman1988Width="102px"
                    donNorman1988Display="inline-block"
                    donNorman1988AlignSelf="unset"
                    donNorman1988MinWidth="unset"
                    frameDivAlignSelf="stretch"
                  />
                  <BookAvailability1
                    rectangle12="/rectangle-12-5@2x.png"
                    theDesignOfEvery="Rich Dad Poor Dad"
                    theDesignOfAlignSelf="stretch"
                    donNorman1988="Robert T.Kiyosaki, 1997"
                    donNorman1988Width="unset"
                    donNorman1988Display="unset"
                    donNorman1988AlignSelf="stretch"
                    donNorman1988MinWidth="unset"
                    frameDivAlignSelf="stretch"
                  />
                  <BookAvailability1
                    rectangle12="/rectangle-12-6@2x.png"
                    theDesignOfEvery="Harry Potter and The..."
                    theDesignOfAlignSelf="unset"
                    donNorman1988="J.K. Rowling, 2002"
                    donNorman1988Width="102px"
                    donNorman1988Display="inline-block"
                    donNorman1988AlignSelf="unset"
                    donNorman1988MinWidth="unset"
                    frameDivAlignSelf="unset"
                  />
                  
                  
                  
                </div>
              </div>
            </div>
            
          </div>
        </section>
      </main>
      <TopMain />
      <div className="background">
        <img className="bg-vector-icon" alt="" src="/bg-vector.svg" />
        <SideBar />
      </div>
    </div>
  );
};

export default Home;
