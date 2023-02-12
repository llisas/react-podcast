import { useState, useEffect } from "react";
import { getPodCasts } from "../services/getPodCast";

export const useFetchPodcasts = () => {
  const [podcast, setPodcast] = useState(null);
  const oneDay = 24 * 60 * 60 * 1000;
  const lastFetchDate = new Date(localStorage.getItem("lastFetchDate"));
  
  useEffect(() => {
    async function fetchPodCast() {
      const response = await getPodCasts();
      setPodcast(response);
    }
    const mustFetch =
      lastFetchDate === null || new Date() - lastFetchDate > oneDay;
    mustFetch
      ? fetchPodCast()
      : setPodcast(JSON.parse(localStorage.getItem("podcast")));
  }, []);

  return [podcast, setPodcast];
};
