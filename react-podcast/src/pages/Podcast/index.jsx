import React, { useState, useEffect, useContext } from "react";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import PodCastsDetailGrid from "../../components/PodCastsDetailGrid";
import { useFetchPodcastDetails } from "../../hooks/useFetchPodcastDetails";
import { useParams } from "react-router-dom";
import { dateConverter, durationConverter } from "../../helpers/time";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { PodcastSelectedContext } from "../../context/PodcastSelectedContext";
import { EpisodeSelectedContext } from "../../context/EpisodeSelectedContext";

const PodCastsDetail = () => {
  const { state } = useContext(PodcastSelectedContext);
  const { setEpisode } = useContext(EpisodeSelectedContext);
  const { podcastId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [podcastList] = useFetchPodcastDetails(podcastId);
  const { podcastSelected } = state;

  useEffect(() => {
    if (podcastList) {
      setIsLoading(false);
    }
  }, [podcastList]);


  if (isLoading) return <Spinner />;
  
  const episodeSelectedHanler = (id) => {
    const episodeFound = podcastList.find((episode) => episode.trackId === id);
    setEpisode({ episodeSelected: episodeFound });
  };

  if (podcastList)
    return (
      <>
        <div className="details__container">
          {podcastList && (
            <div>
              <PodCastsDetailInfo
                img={podcastList[0].artworkUrl600}
                description={podcastSelected.summary?.label}
                tittle={podcastList[0].trackName}
                author={podcastList[0].artistName}
                hasBackPage={false}
              ></PodCastsDetailInfo>
            </div>
          )}

          {podcastList && (
            <div className="details__episodes-container">
              <div className="details__episodes">
                <h3> Episodes: {podcastList
                  .filter(({ episodeUrl }) => episodeUrl).length}</h3>
              </div>
              <div className="details__grid-container details__grid_header">
                <div className="details__grid details__no-hover">
                  <div className="details__title details__bold">Tittle</div>
                  <div className="details__date details__bold">Date</div>
                  <div className="details__duration details__bold">
                    Duration
                  </div>
                </div>
                {podcastList
                  .filter(({ episodeUrl }) => episodeUrl)
                  .map(
                    ({ trackId, trackName, releaseDate, trackTimeMillis }) => (
                      <Link
                        to={`/podcast/${podcastId}/episode/${trackId}`}
                        key={trackId}
                        onClick={() => episodeSelectedHanler(trackId)}
                      >
                        <PodCastsDetailGrid
                          id={trackId}
                          tittle={trackName}
                          date={dateConverter(releaseDate)}
                          duration={durationConverter(trackTimeMillis)}
                        ></PodCastsDetailGrid>
                      </Link>
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      </>
    );
};
export default PodCastsDetail;
