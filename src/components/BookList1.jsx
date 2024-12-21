import RecommendationItems from "./RecommendationItems";
import DisplayItems from "./DisplayItems";
import PropTypes from "prop-types";
import "./BookList1.css";

const BookList1 = ({ className = "" }) => {
  return (
    <section className={`book-list1 ${className}`}>
      <RecommendationItems
        recommendationItemsFlex="unset"
        recommendationItemsMinWidth="unset"
        dateIcons="/rectangle-12@2x.png"
        mar2023="Don’t Make Me think"
        theHinduNews="Steve Krug, 2000"
      />
      <DisplayItems
        rectangle12="/rectangle-12-1@2x.png"
        theDesignOfEvery="The Design of Every.."
        donNorman1988="Don Norman, 1988"
        prop="4.5"
      />
      <DisplayItems
        rectangle12="/rectangle-12-2@2x.png"
        theDesignOfEvery="Sprint : How to solve..."
        theDesignOfAlignSelf="unset"
        donNorman1988="Jake Knapp, 2000"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="unset"
      />
      <DisplayItems
        rectangle12="/rectangle-12-3@2x.png"
        theDesignOfEvery="Learn UX : Design Gr..."
        theDesignOfAlignSelf="unset"
        donNorman1988="Jeff Gothelf, 2016"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="unset"
      />
      <DisplayItems
        rectangle12="/rectangle-12-4@2x.png"
        theDesignOfEvery="The Road to React"
        theDesignOfAlignSelf="stretch"
        donNorman1988="Steve Krug, 2000"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="stretch"
      />
      <DisplayItems
        rectangle12="/rectangle-12-5@2x.png"
        theDesignOfEvery="Rich Dad Poor Dad"
        theDesignOfAlignSelf="stretch"
        donNorman1988="Robert T.Kiyosaki, 1997"
        donNorman1988Width="unset"
        donNorman1988Display="unset"
        donNorman1988AlignSelf="stretch"
        donNorman1988MinWidth="unset"
        prop="5"
        frameDivAlignSelf1="stretch"
      />
      <DisplayItems
        rectangle12="/rectangle-12-6@2x.png"
        theDesignOfEvery="Harry Potter and The ..."
        theDesignOfAlignSelf="unset"
        donNorman1988="J.K. Rowling, 2002"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.9"
        frameDivAlignSelf1="unset"
      />
      <DisplayItems
        rectangle12="/rectangle-12-11@2x.png"
        theDesignOfEvery="You Don’t Know JS: S.."
        theDesignOfAlignSelf="unset"
        donNorman1988="Kyle Simpson, 2014"
        donNorman1988Width="unset"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="102px"
        prop="4.9"
        frameDivAlignSelf1="unset"
      />
      <RecommendationItems
        recommendationItemsFlex="unset"
        recommendationItemsMinWidth="unset"
        dateIcons="/rectangle-12@2x.png"
        mar2023="Don’t Make Me think"
        theHinduNews="Steve Krug, 2000"
      />
      <DisplayItems
        rectangle12="/rectangle-12-1@2x.png"
        theDesignOfEvery="The Design of Every.."
        theDesignOfAlignSelf="stretch"
        donNorman1988="Don Norman, 1988"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="stretch"
      />
      <DisplayItems
        rectangle12="/rectangle-12-2@2x.png"
        theDesignOfEvery="Sprint : How to solve..."
        theDesignOfAlignSelf="unset"
        donNorman1988="Jake Knapp, 2000"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="unset"
      />
      <DisplayItems
        rectangle12="/rectangle-12-3@2x.png"
        theDesignOfEvery="Learn UX : Design Gr..."
        theDesignOfAlignSelf="unset"
        donNorman1988="Jeff Gothelf, 2016"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="unset"
      />
      <DisplayItems
        rectangle12="/rectangle-12-4@2x.png"
        theDesignOfEvery="The Road to React"
        theDesignOfAlignSelf="stretch"
        donNorman1988="Steve Krug, 2000"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.5"
        frameDivAlignSelf1="stretch"
      />
      <DisplayItems
        rectangle12="/rectangle-12-5@2x.png"
        theDesignOfEvery="Rich Dad Poor Dad"
        theDesignOfAlignSelf="stretch"
        donNorman1988="Robert T.Kiyosaki, 1997"
        donNorman1988Width="unset"
        donNorman1988Display="unset"
        donNorman1988AlignSelf="stretch"
        donNorman1988MinWidth="unset"
        prop="5"
        frameDivAlignSelf1="stretch"
      />
      <DisplayItems
        rectangle12="/rectangle-12-6@2x.png"
        theDesignOfEvery="Harry Potter and The ..."
        theDesignOfAlignSelf="unset"
        donNorman1988="J.K. Rowling, 2002"
        donNorman1988Width="102px"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="unset"
        prop="4.9"
        frameDivAlignSelf1="unset"
      />
      <DisplayItems
        rectangle12="/rectangle-12-11@2x.png"
        theDesignOfEvery="You Don’t Know JS: S.."
        theDesignOfAlignSelf="unset"
        donNorman1988="Kyle Simpson, 2014"
        donNorman1988Width="unset"
        donNorman1988Display="inline-block"
        donNorman1988AlignSelf="unset"
        donNorman1988MinWidth="102px"
        prop="4.9"
        frameDivAlignSelf1="unset"
      />
    </section>
  );
};

BookList1.propTypes = {
  className: PropTypes.string,
};

export default BookList1;
