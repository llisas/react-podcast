import { BASE_URL } from "./settings";

export const getPodCast = async () => {
  try {
    const response = await fetch(BASE_URL);
    const responseJson = await response.json();
    console.log(responseJson.feed.entry)
    return responseJson.feed.entry;
  } catch (error) {
    console.error(error);
  }
};
