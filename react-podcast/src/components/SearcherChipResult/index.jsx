import React from "react";
import PropTypes from "prop-types";

const SearcherChipResult = ({ result = 0 }) => {
  return (
    <>
      <div className="header__searcher_result"> {result}</div>
    </>
  );
};

SearcherChipResult.propTypes = {
  result: PropTypes.number.isRequired,
};

export default SearcherChipResult;
