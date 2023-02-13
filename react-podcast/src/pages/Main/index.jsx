import { Link } from "react-router-dom";
import PodCastList from "../../components/PodCastList";
import Spinner from "../../components/Spinner";
import Searcher from "../../components/Searcher";
import SearcherChipResult from "../../components/SearcherChipResult";
import { useFetchPodcasts } from "../../hooks/useFetchPodcast";
import { filterPodcastByName } from "../../helpers/filters";

const Main = () => {
  const [podcast, setPodcast] = useFetchPodcasts();
  const onSearcherHandler = (text) => {
    setPodcast(filterPodcastByName(text));
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
