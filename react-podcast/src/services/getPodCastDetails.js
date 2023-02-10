import { BASE_URL, CORS } from "./settings";

export const getPodCastDetail = async (id) => {
  try {
    const response = await fetch(`${CORS}/${BASE_URL}/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`)
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
