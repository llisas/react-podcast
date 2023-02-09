import { useState, useEffect } from 'react';
import { getPodCasts } from '../services/getPodCast';

export const useFetchPodcasts = () => {
  const [podcast, setPodcast] = useState(null);
  useEffect(() => {
    async function fetchPodCast() {
      const response = await getPodCasts();
      setPodcast(response);
    }
    fetchPodCast();
  }, []);

  return [podcast, setPodcast];
}



