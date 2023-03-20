import React from "react";
import PropTypes from "prop-types";

const Searcher = ({ onSearcher }) => {
  const inputSearcherHandler = (e) => {
    onSearcher(e.target.value);
  };
  return (
    <>
      <input
        className="header__searcher"
        onChange={inputSearcherHandler}
        placeholder="Filter podcasts..."
        type="text"
      ></input>
    </>
  );
};

Searcher.propTypes = {
  onSearcher: PropTypes.func.isRequired,
};

export default Searcher;
