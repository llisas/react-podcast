import React from "react";
import { Link } from "react-router-dom";
import { useFetchPodcasts } from "../../hooks/useFetchPodcast";
import { filterPodcastByName } from "../../helpers/filters";
import PodCastList from "../../components/PodCastList";
import Searcher from "../../components/Searcher";
import SearcherChipResult from "../../components/SearcherChipResult";


const Main = () => {
  const [podcast, setPodcast] = useFetchPodcasts();
  const allPodcast = JSON.parse(window.localStorage.getItem("podcast"));
  const onSearcherHandler = (text) => {
    setPodcast(filterPodcastByName(allPodcast, text));
  };

  return (
    <>
      {podcast && (
        <div>
          <div className="header__searcher_container">
            <SearcherChipResult result={podcast.length} />
            <Searcher onSearcher={onSearcherHandler} />
          </div>
          <div className="main__grid_container">
            {podcast.map((item) => (
              <Link
                key={item.id.attributes["im:id"]}
                to={`podcast/${item.id.attributes["im:id"]}`}
              >
                <PodCastList
                  author={item["im:artist"].label}
                  id={item.id.attributes["im:id"]}
                  img={item["im:image"][2].label}
                  tittle={item["im:name"].label}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
