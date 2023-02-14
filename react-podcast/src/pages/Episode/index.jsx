import React, { useContext } from "react";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import PodcastEpisodePlayer from "../../components/PodcastEpisodePlayer";
import { EpisodeSelectedContext } from "../../context/EpisodeSelectedContext";
const Episode = () => {
  const { episode } = useContext(EpisodeSelectedContext);
  const { episodeSelected } = episode;
  return (
    <>
      {
        <div className="episode__container">
          <div className="episode__podcatsDetailInfo">
            <PodCastsDetailInfo 
              img={episodeSelected.artworkUrl600}
              description={episodeSelected.description}
              tittle={episodeSelected.trackName}
              author={episodeSelected.collectionName}
              hasBackPage={true}
            ></PodCastsDetailInfo>
          </div>

          <div className="episode__podcastEpisodePlayer">
            <PodcastEpisodePlayer
              tittle={episodeSelected.trackName}
              description={episodeSelected.shortDescription}
              urlPlayer={episodeSelected.episodeUrl}
            ></PodcastEpisodePlayer>
          </div>
        </div>
      }
    </>
  );
};

export default Episode;
