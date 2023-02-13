import React from "react";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import PodcastEpisodePlayer from "../../components/PodcastEpisodePlayer";
import { useGetPodcastEpisode } from "../../hooks/useGetPodcastEpisode";
import { useGetEpisodeForPlayer } from "../../hooks/useGetEpisodeForPlayer";
import { useParams } from "react-router-dom";

const Episode = () => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();

  const [xmlData ] = useGetPodcastEpisode(podcastId);
  const [xmlPlayer] = useGetEpisodeForPlayer(podcastId, episodeId);

  return (
    <>
      {xmlData && (
        <div className="episode__container">
          <div className="episode__podcatsDetailInfo">
            <PodCastsDetailInfo
              img={xmlData.image}
              description={xmlData.description}
              tittle={xmlData.title}
              author={xmlData.author}
              hasBackPage = {true}
            ></PodCastsDetailInfo>
          </div>

          {xmlPlayer && (
            <div className="episode__podcastEpisodePlayer">
              <PodcastEpisodePlayer
                tittle={xmlData.title}
                description={xmlPlayer.description}
                urlPlayer={xmlPlayer.urlPlayer}
              ></PodcastEpisodePlayer>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Episode;
