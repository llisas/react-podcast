import { useState, useEffect } from 'react';
import { getPodCastDetail } from '../services/getPodCastDetails';

export const useFetchPodcastDetails = (id) => {
  const [podcasts, setPodcasts] = useState(null);
  useEffect(() => {
    async function getPodCastDetails() {
      const response = await getPodCastDetail(id);
      setPodcasts(response.results);
    }
    getPodCastDetails();
  }, [id]);

  return [podcasts, setPodcasts];
}



