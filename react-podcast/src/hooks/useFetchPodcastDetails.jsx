import { useState, useEffect } from "react";
import { getPodCastDetails } from "../services/getPodCastDetails";
import { ONE_DAY } from "../services/settings";

export const useFetchPodcastDetails = (id) => {
  const [podcasts, setPodcasts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const cachedPodcast = localStorage.getItem(`podcast_${id}`);
    const podcastDetails = cachedPodcast ? JSON.parse(cachedPodcast) : null;

    async function fetchPodcastDetails() {
      const response = await getPodCastDetails(id);
      setPodcasts(response);
      saveInLocalStorage(response, id);
      setIsLoading(false);
    }
    if (!podcastDetails || Date.now() - podcastDetails.timestamp > ONE_DAY) {
      fetchPodcastDetails();
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
