import React from "react";
import { useParams } from "react-router-dom";
import PodCastsDetailInfo from "../../components/PodCastsDetailInfo";
import PodcastEpisodePlayer from "../../components/PodcastEpisodePlayer";
import { useGetLocalPodCast } from "../../hooks/useGetLocalPodCast";
import { useGetLocalEpisode } from "../../hooks/useGetLocalEpisode";

const Episode = () => {
  const { podcastId, episodeId } = useParams();

  const [podcast] = useGetLocalPodCast(podcastId);
  const [episodePodcast] = useGetLocalEpisode(podcastId, episodeId);

  return (
    <>
      {podcast && (
        <div className="episode__container">
          <div className="episode__podcatsDetailInfo">
            <PodCastsDetailInfo
              img={podcast["im:image"][2].label}
              description={podcast.summary?.label}
              tittle={podcast.title.label}
              author={podcast["im:artist"].label}
              hasBackPage={true}
            />
          </div>
          {episodePodcast && (
            <div className="episode__podcastEpisodePlayer">
              <PodcastEpisodePlayer
                tittle={episodePodcast.trackName}
                description={episodePodcast.shortDescription}
                urlPlayer={episodePodcast.episodeUrl}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Episode;
