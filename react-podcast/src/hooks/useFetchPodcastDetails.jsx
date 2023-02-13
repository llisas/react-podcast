import { useState, useEffect } from "react";
import { fecthPodCastDetails } from "../services/getPodCastDetails";

export const useFetchPodcastDetails = (id) => {
  const [podcasts, setPodcasts] = useState(null);

  useEffect(() => {
    const cachedPodcast = localStorage.getItem(`podcast_${id}`);

    const podcastDetails = cachedPodcast ? JSON.parse(cachedPodcast) : null;
    const oneDay = 24 * 60 * 60 * 1000;

    async function getPodcastDetails() {
      const response = await fecthPodCastDetails(id);
      setPodcasts(response);
      localStorage.setItem(
        `podcast_${id}`,
        JSON.stringify({
          data: response,
          timestamp: Date.now(),
        })
      );
    }

    if (!podcastDetails || Date.now() - podcastDetails.timestamp > oneDay) {
      getPodcastDetails();
    } else {
      setPodcasts(podcastDetails.data);
    }
  }, [id]);

  return [podcasts, setPodcasts];
};
