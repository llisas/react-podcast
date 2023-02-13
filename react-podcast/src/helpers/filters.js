export const filterPodcastByName = (text) =>{
    const allPodcast = JSON.parse(window.localStorage.getItem("podcast"));
    const podcastFilter = allPodcast.filter((item) => {
      return (
        item["im:name"].label.toLowerCase().includes(text.toLowerCase()) ||
        item["im:artist"].label.toLowerCase().includes(text.toLowerCase())
      );
    });
   return podcastFilter ?  podcastFilter :  allPodcast;
}