import { useEffect, useState } from "react";
import { xmlEpidoseComposer } from "../helpers/xmlAdapter";

export const useGetEpisodeForPlayer = (podcastId, episodeId) => {
  // check if we have the data in local
  // if dont, we have to call the api -->TODO
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const cachedPodcast = localStorage.getItem(`podcast_${podcastId}`);
    const podcastDetails = cachedPodcast ? JSON.parse(cachedPodcast) : null;
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(podcastDetails.details, "text/xml");
    const xmlDataCompose = xmlEpidoseComposer(xmlDoc, episodeId);
    setXmlData(xmlDataCompose);
  }, [podcastId, episodeId]);
  return [xmlData, setXmlData];
};
