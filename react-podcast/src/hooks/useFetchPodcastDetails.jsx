import { useState, useEffect } from "react";
import { fecthPodCastDetails } from "../services/getPodCastDetails";
import { xmlDataComposer } from "../helpers/xmlAdapter";

export const useFetchPodcastDetails = (id) => {
  const [podcasts, setPodcasts] = useState(null);

     
  useEffect(() => {
    const cachedPodcast = localStorage.getItem(`podcast_${id}`);
    const podcastDetails = cachedPodcast ? JSON.parse(cachedPodcast) : null;
    const oneDay = 24 * 60 * 60 * 1000;

    async function getPodCastDetails() {
      const response = await fecthPodCastDetails(id);
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(response, "text/xml");
      setPodcasts(xmlDataComposer(xmlDoc));
    }

    if (!podcastDetails || Date.now() - podcastDetails.timestamp > oneDay) {
      getPodCastDetails();
    } else {
      const xmlDoc = new DOMParser().parseFromString(
        podcastDetails.details,
        "text/xml"
      );
      setPodcasts(xmlDataComposer(xmlDoc));
    }
  }, [id]);

  return [podcasts, setPodcasts];
};
