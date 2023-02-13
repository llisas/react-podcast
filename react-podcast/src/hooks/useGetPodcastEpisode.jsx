import { useEffect, useState } from "react";
import { xmlHeaderDataComposer } from "../helpers/xmlAdapter";

export const useGetPodcastEpisode = (podcastId) => {
  // check if we have the data in local
  // if dont, we have to call the api -->TODO
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const cachedPodcast = localStorage.getItem(`podcast_${podcastId}`);
    const podcastDetails = cachedPodcast ? JSON.parse(cachedPodcast) : null;
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(podcastDetails.details, "text/xml");
    const xmlDataCompose = xmlHeaderDataComposer(xmlDoc);
    setXmlData(xmlDataCompose);
  }, [podcastId]);

  return [xmlData, setXmlData];
};
