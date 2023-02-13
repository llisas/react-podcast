import React, {useState,useEffect}from "react";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import PodCastsDetailGrid from "../../components/PodCastsDetailGrid";
import { useFetchPodcastDetails } from "../../hooks/useFetchPodcastDetails";
import { useParams } from "react-router-dom";
import { dateConverter } from "../../helpers/time";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const PodCastsDetail = () => {
  const { podcastId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [podcastList, setPoscastList] = useFetchPodcastDetails(podcastId);

  useEffect(() => {
    if (podcastList) {
      setIsLoading(false);
    }
  }, [podcastList]);

  if (isLoading) return <Spinner />;

  if (podcastList)
    return (
      <>
        <div className="details__container">
          {podcastList && (
            <div>
              <PodCastsDetailInfo
                img={podcastList.image}
                description={podcastList.description}
                tittle={podcastList.title}
                author={podcastList.author}
                hasBackPage = {false}
              ></PodCastsDetailInfo>
            </div>
          )}

          {podcastList && (
            <div className="details__episodes-container">
              <div className="details__episodes">
                <h3> Episodes: {podcastList.itemList.length}</h3>
              </div>
              <div className="details__grid-container details__grid_header">
                <div className="details__grid details__no-hover">
                  <div className="details__title details__bold">Tittle</div>
                  <div className="details__date details__bold">Date</div>
                  <div className="details__duration details__bold">
                    Duration
                  </div>
                </div>
                {podcastList.itemList.map(
                  ({ trackId, trackName, releaseDate, trackDuration }) => {
                    return (
                      <Link
                        to={`/podcast/${podcastId}/episode/${trackId}`}
                        key={trackId}
                      >
                        <PodCastsDetailGrid
                          id={trackId}
                          tittle={trackName}
                          date={dateConverter(releaseDate)}
                          duration={trackDuration}
                        ></PodCastsDetailGrid>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          )}
        </div>
      </>
    );
};
export default PodCastsDetail;
