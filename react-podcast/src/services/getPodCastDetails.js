import { BASE_URL, CORS } from "./settings";

export const fecthPodCastDetails = async (id) => {
  try {
    //const response = await fetch(`${CORS}/${BASE_URL}/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode`)
    const response = await fetch(`${CORS}/${BASE_URL}/lookup?id=${id}`);
    const responseJson = await response.json();
    const feedUrl = responseJson.results[0].feedUrl;
    const xml = fecthPodCastDetailsXml(feedUrl, id);
    return xml;
  } catch (error) {
    console.error(error);
  }
};

const fecthPodCastDetailsXml = (url, id) => {
  return new Promise((resolve, reject) => {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${CORS}/${url}`, false);
      xhr.setRequestHeader("origin", "*");
      xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
      xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
          const xmlText = xhr.responseText;
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, "text/xml");
          try {
            localStorage.setItem(
              `podcast_${id}`,
              JSON.stringify({
                timestamp: new Date(),
                details: new XMLSerializer().serializeToString(xmlDoc),
              })
            );
          } catch (error) {
            console.error("error saving data=>", error);
          }

          resolve(xmlText);
        }
      };
      xhr.send();
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
