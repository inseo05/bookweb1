import { useMemo } from "react";
import PropTypes from "prop-types";
import "./RecommendationItems.css";

const RecommendationItems = ({
  className = "",
  recommendationItemsFlex,
  recommendationItemsMinWidth,
  dateIcons,
  mar2023,
  theHinduNews,
}) => {
  const recommendationItemsStyle = useMemo(() => {
    return {
      flex: recommendationItemsFlex,
      minWidth: recommendationItemsMinWidth,
    };
  }, [recommendationItemsFlex, recommendationItemsMinWidth]);

  return (
    <div
      className={`recommendation-items ${className}`}
      style={recommendationItemsStyle}
    >
      <div className="recommendation-item">
        <img className="date-icons" alt="" src={dateIcons} />
      </div>
      <div className="news-date-row">
        <div className="mar-20237">{mar2023}</div>
        <div className="the-hindu-news">{theHinduNews}</div>
        <div className="the-hindu-news">
          <span>4.5</span>
          <span className="span1">/5</span>
        </div>
      </div>
    </div>
  );
};

RecommendationItems.propTypes = {
  className: PropTypes.string,
  dateIcons: PropTypes.string,
  mar2023: PropTypes.string,
  theHinduNews: PropTypes.string,

  /** Style props */
  recommendationItemsFlex: PropTypes.string,
  recommendationItemsMinWidth: PropTypes.string,
};

export default RecommendationItems;
