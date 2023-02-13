import React, { useState } from "react";
import Searcher from "../../components/Searcher";
import SearcherChipResult from "../../components/SearcherChipResult";

const PodcastFilter = ({ allPodcast, setPodcast }) => {
  const [asd, setasd] = useState(allPodcast);

  const onSearcherHandler = (text) => {
    console.log("AAAAAA", text);
    const podcastFilter = asd.filter((item) => {
      return (
        item["im:name"].label.toLowerCase().includes(text.toLowerCase()) ||
        item["im:artist"].label.toLowerCase().includes(text.toLowerCase())
      );
    });
    
    podcastFilter ? setasd(podcastFilter) : setasd( JSON.parse(window.localStorage.getItem("podcast")));
  };

  return (
    <div className="header__searcher_container">
      <SearcherChipResult result={asd.length}></SearcherChipResult>
      <Searcher onSearcher={onSearcherHandler}></Searcher>
    </div>
  );
};

export default PodcastFilter;