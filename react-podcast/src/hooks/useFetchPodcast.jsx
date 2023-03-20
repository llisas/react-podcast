import { useState, useEffect } from "react";
import { getPodCasts } from "../services/getPodCast";
import {ONE_DAY} from '../services/settings'
export const useFetchPodcasts = () => {
  const [podcast, setPodcast] = useState(null);
  const lastFetchDate = new Date(localStorage.getItem("lastFetchDate"));
  useEffect(() => {
    async function fetchPodCast() {
      const response = await getPodCasts();
      setPodcast(response);
    }
    const mustFetch =
      lastFetchDate === null || new Date() - lastFetchDate > ONE_DAY;
    mustFetch
      ? fetchPodCast()
      : setPodcast(JSON.parse(localStorage.getItem("podcast")));
  }, []);

  return [podcast, setPodcast];
};
