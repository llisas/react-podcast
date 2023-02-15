import { useEffect, useState } from "react";

export const useGetLocalEpisode = (podcastId, episodeId) => {
  const [localEpisode, setLocalEpisode] = useState(null);
  useEffect(() => {
    const allPodcast = JSON.parse(
      window.localStorage.getItem(`podcast_${podcastId}`)
    );
    const { data } = allPodcast;
    const episodeFound = data.find(
      (episode) => episode.trackId === parseInt(episodeId)
    );
    setLocalEpisode(episodeFound);
  }, [podcastId, episodeId]);
  return [localEpisode];
};
