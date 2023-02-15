import React, { useContext, useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import PodCastsDetailGrid from "../../components/PodCastsDetailGrid";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import { useFetchPodcastDetails } from "../../hooks/useFetchPodcastDetails";
import { useGetLocalPodCast } from "../../hooks/useGetLocalPodCast";
import { dateConverter, durationConverter } from "../../helpers/time";
import { AppContext } from "../../context/AppContext";

const PodCastsDetail = () => {

  const { podcastId,  } = useParams();
  const [podcastList, isLoading] = useFetchPodcastDetails(podcastId);
  const [podcast] = useGetLocalPodCast(podcastId);
  const { setLoading } = useContext(AppContext);
  
  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <div className="details__container">
      {podcastList && (
        <div>
          <PodCastsDetailInfo
            img={podcast["im:image"][2].label}
            description={podcast.summary?.label}
            tittle={podcast.title.label}
            author={podcast["im:artist"].label}
            hasBackPage={false}
          />
        </div>
      )}

      {podcastList && (
        <div className="details__episodes-container">
          <div className="details__episodes">
            <h3>
              Episodes:{" "}
              {podcastList.filter(({ episodeUrl }) => episodeUrl).length}
            </h3>
          </div>

          <div className="details__grid-container details__grid_header">
            <div className="details__grid details__no-hover">
              <div className="details__title details__bold">Tittle</div>
              <div className="details__date details__bold">Date</div>
              <div className="details__duration details__bold">Duration</div>
            </div>

            {podcastList
              .filter(({ episodeUrl }) => episodeUrl)
              .map(({ trackId, trackName, releaseDate, trackTimeMillis }) => (
                <Link
                  to={`/podcast/${podcastId}/episode/${trackId}`}
                  key={trackId}
                >
                  <PodCastsDetailGrid
                    id={trackId}
                    tittle={trackName}
                    date={dateConverter(releaseDate)}
                    duration={durationConverter(trackTimeMillis)}
                  />
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PodCastsDetail;
