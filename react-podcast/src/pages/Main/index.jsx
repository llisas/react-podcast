import { Link } from "react-router-dom";
import PodCastList from "../../components/PodCastList";
import Spinner from "../../components/Spinner";
import Searcher from "../../components/Searcher";
import { useFetchPodcasts } from "../../hooks/useFetchPodcast";

const Main = () => {
  
  const [podcast, setPodcast] = useFetchPodcasts();

  const onSearcherHandler = (text) => {
    const allPodcast = JSON.parse(window.localStorage.getItem("podcast"));
    const podcastFilter = allPodcast.filter((item) => {
      return (
        item["im:name"].label.toLowerCase().includes(text.toLowerCase()) ||
        item["im:artist"].label.toLowerCase().includes(text.toLowerCase())
      );
    });
    podcastFilter ? setPodcast(podcastFilter) : setPodcast(allPodcast);
  };

  return (
    <>
      <Searcher onSearcher={onSearcherHandler}></Searcher>

      <div  className="main__grid_container ">
      {podcast &&
        podcast.map((item) => (
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

    </>
  );
};

export default Main;
