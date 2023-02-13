import React from "react";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import PodcastEpisodePlayer from "../../components/PodcastEpisodePlayer";
import { useGetPodcastEpisode } from "../../hooks/useGetPodcastEpisode";
import { useGetEpisodeForPlayer } from "../../hooks/useGetEpisodeForPlayer";
import { useParams } from "react-router-dom";

const Episode = () => {
  const { podcastId } = useParams();
  const { episodeId } = useParams();

  const [xmlData] = useGetPodcastEpisode(podcastId);
  const [xmlPlayer] = useGetEpisodeForPlayer(podcastId, episodeId);

  return (
    <>
      {xmlData ? (
        <div className="episode__container">
          <div className="episode__podcatsDetailInfo">
            <PodCastsDetailInfo
              img={xmlData.image}
              description={xmlData.description}
              tittle={xmlData.title}
              author={xmlData.author}
              hasBackPage={true}
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
      ) : (
        <div>The test requieres to save the podcastś data in local , but with a massive podcast list we dont have enought space left in our local Storage.
          You can face this error in your console like:
          <h4>error saving data => DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'podcast_xxxxxxxx' exceeded the quota</h4>
          
          We have two options in that case:
          <p>Saving with Web SQL Database over SQLITE</p>
          <p>Call tha api and paint data directly not saving data in local </p>
        </div>
       
      )}
    </>
  );
};

export default Episode;
