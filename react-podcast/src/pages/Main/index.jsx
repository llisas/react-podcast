import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useFetchPodcasts } from "../../hooks/useFetchPodcast";
import { filterPodcastByName } from "../../helpers/filters";
import { PodcastSelectedContext } from "../../context/PodcastSelectedContext";
import PodCastList from "../../components/PodCastList";
import Searcher from "../../components/Searcher";
import SearcherChipResult from "../../components/SearcherChipResult";

const Main = () => {
  const { setState } = useContext(PodcastSelectedContext);
  const [podcast, setPodcast] = useFetchPodcasts();

  const onSearcherHandler = (text) => {
    setPodcast(filterPodcastByName(text));
  };

  const itemSelectedHanler = (id) => {
    const podcastFound = podcast.find(
      (element) => element.id.attributes["im:id"] === id
    );
    setState({ podcastSelected: podcastFound });
  };

  return (
    <>
      {podcast && (
        <div>
          <div className="header__searcher_container">
            <SearcherChipResult result={podcast.length}></SearcherChipResult>
            <Searcher onSearcher={onSearcherHandler}></Searcher>
          </div>
          <div className="main__grid_container ">
            {podcast.map((item) => (
              <Link
                onClick={() => itemSelectedHanler(item.id.attributes["im:id"])}
                key={item.id.attributes["im:id"]}
                to={`podcast/${item.id.attributes["im:id"]}`}
              >
                <PodCastList
                  author={item["im:artist"].label}
                  id={item.id.attributes["im:id"]}
                  img={item["im:image"][2].label}
                  tittle={item["im:name"].label}
                ></PodCastList>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
