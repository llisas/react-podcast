import { useEffect, useState } from "react";

export const useGetLocalPodCast = (podcastId) => {
  const [localPodcast, setLocalPodcast] = useState(null);
  useEffect(() => {
    const allPodcast = JSON.parse(window.localStorage.getItem("podcast"));
    allPodcast.forEach((podcast) => {
      if (podcast.id.attributes["im:id"] === podcastId) {
        setLocalPodcast(podcast);
      }
    });
  }, [podcastId]); 
  return [localPodcast];
};
