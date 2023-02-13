import { BASE_URL, CORS } from "./settings";

export const fecthPodCastDetails = async (id) => {
  try {
    const response = await fetch(`${CORS}/${BASE_URL}/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&limit=100`)
    const responseJson = await response.json();
    const feedUrl = responseJson.results;
    return feedUrl;
  } catch (error) {
    console.error(error);
  }
};

