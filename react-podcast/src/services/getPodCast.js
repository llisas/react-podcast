import { BASE_URL } from "./settings";

export const getPodCasts = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    const responseJson = await response.json();
    localStorage.setItem("podcast", JSON.stringify(responseJson.feed.entry));
    localStorage.setItem("lastFetchDate", new Date());
    return responseJson.feed.entry;
  } catch (error) {
    console.error(error);
  }
};
