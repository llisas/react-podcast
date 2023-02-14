import { useState, useEffect } from "react";
import { fecthPodCastDetails } from "../services/getPodCastDetails";

export const useFetchPodcastDetails = (id) => {
  const [podcasts, setPodcasts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const cachedPodcast = localStorage.getItem(`podcast_${id}`);
    const podcastDetails = cachedPodcast ? JSON.parse(cachedPodcast) : null;
    const oneDay = 24 * 60 * 60 * 1000;

    async function getPodcastDetails() {
      const response = await fecthPodCastDetails(id);
      setPodcasts(response);
      saveInLocalStorage(response, id);
      setIsLoading(false);
    }
    if (!podcastDetails || Date.now() - podcastDetails.timestamp > oneDay) {
      getPodcastDetails();
    } else {
      setPodcasts(podcastDetails.data);
      setIsLoading(false);
    }
  }, [id]);

  return [podcasts, isLoading];
};

const saveInLocalStorage = (response, id) => {
  try {
    localStorage.setItem(
      `podcast_${id}`,
      JSON.stringify({
        data: response,
        timestamp: Date.now(),
      })
    );
  } catch (error) {
    console.error("error saving data in localStorage=>", error);
  }
};
