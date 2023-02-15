import { BASE_URL, PROXY } from "./settings";

export const fecthPodCastDetails = async (id) => {
  try {
    const response = await fetch(`${PROXY}/${BASE_URL}/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&limit=200`)
    const responseJson = await response.json();
    const feedUrl = responseJson.results;
    return feedUrl;
  } catch (error) {
    console.error("error fetching data =>",error);
  }
};

