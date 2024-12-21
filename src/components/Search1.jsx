import PropTypes from "prop-types";
import "./Search1.css";

const Search1 = ({ className = "", searchHref }) => {
  return (
    <a className={`search2 ${className}`} href={searchHref}>
      Search
    </a>
  );
};

Search1.propTypes = {
  className: PropTypes.string,
  searchHref: PropTypes.string.isRequired,
};

export default Search1;
