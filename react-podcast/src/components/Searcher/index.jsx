import React from "react";
import PropTypes from "prop-types";

const Searcher = ({ onSearcher }) => {
    const inputSearcherHandler = (e) =>{
        onSearcher(e.target.value)
    }
  return (
    <>
      <input type="text" onChange={inputSearcherHandler}></input>
    </>
  );
};

Searcher.propTypes = {
    onSearcher: PropTypes.func.isRequired,
};

export default Searcher;
