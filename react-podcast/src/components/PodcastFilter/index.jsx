import React, { useState } from "react";
import Searcher from "../../components/Searcher";
import SearcherChipResult from "../../components/SearcherChipResult";

const PodcastFilter = ({ allPodcast, setPodcast }) => {
  const [results, setResults] = useState(allPodcast);

  const onSearcherHandler = (text) => {
   
    const podcastFilter = results.filter((item) => {
      return (
        item["im:name"].label.toLowerCase().includes(text.toLowerCase()) ||
        item["im:artist"].label.toLowerCase().includes(text.toLowerCase())
      );
    });
    
    podcastFilter ? setResults(podcastFilter) : setResults( JSON.parse(window.localStorage.getItem("podcast")));
  };

  return (
    <div className="header__searcher_container">
      <SearcherChipResult result={results.length}></SearcherChipResult>
      <Searcher onSearcher={onSearcherHandler}></Searcher>
    </div>
  );
};

export default PodcastFilter;