import { BASE_URL } from "./settings";

export const getPodCasts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const responseJson = await response.json();
        
    // Almacena la lista de películas en el almacenamiento local
    
    const lastFetchDate = new Date(localStorage.getItem("lastFetchDate"));
    const shouldFetch = lastFetchDate === null || (new Date() - lastFetchDate) > 24 * 60 * 60 * 1000;
    if (shouldFetch){
    localStorage.setItem("podcast", JSON.stringify(responseJson.feed.entry));
    localStorage.setItem("lastFetchDate", new Date());}
    return responseJson.feed.entry;
  } catch (error) {
    console.error(error);
  }
};

