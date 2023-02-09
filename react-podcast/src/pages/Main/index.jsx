import React, { useEffect, useState } from "react";
import { getPodCasts } from "../../services/getPodCast";
import PodCastList from "../../components/PodCastList";
import Spinner from "../../components/Spinner";
import Header from "../../components/Header";
import Searcher from "../../components/Searcher";

const Main = () => {
  const [podcast, setPodCast] = useState([]);

  useEffect(() => {
    async function fetchPodCast() {
      const response = await getPodCasts();
      setPodCast(response);
    }
    fetchPodCast();
  }, []);

  const onSearcherHandler = (text) => {
    const allPodcast = JSON.parse(window.localStorage.getItem("podcast"));
    const podcastFilter = allPodcast.filter((item) => {
      return (
        item["im:name"].label.includes(text) ||
        item["im:artist"].label.includes(text)
      );
    });
    podcastFilter ? setPodCast(podcastFilter) : setPodCast(allPodcast);
  };

  return (
    <>
      <Header></Header>
      <Searcher onSearcher={onSearcherHandler}></Searcher>
      {podcast.map((item) => (
        <PodCastList
          author={item["im:artist"].label}
          img={item["im:image"][2].label}
          key={item.id.attributes["im:id"]}
          tittle={item["im:name"].label}
        ></PodCastList>
      ))}
    </>
  );
};

export default Main;
