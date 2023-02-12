export const xmlDataComposer = (xmlDoc) => {
  const podcastObject = {};
  const itemList = [];
  const title = xmlDoc.querySelector("title").textContent;
  const description = xmlDoc.querySelector("description").textContent;
  const items = xmlDoc.querySelectorAll("item");
  const image = xmlDoc.querySelector("image");
  const imageUrl =
  image.getAttribute("href") || image.querySelector("url").textContent;
  const author = xmlDoc.getElementsByTagNameNS(
    "http://www.itunes.com/dtds/podcast-1.0.dtd",
    "author"
  )[0].textContent;
  for (const item of items) {
    const itemObject = {};
    const [trackName, releaseDate] = [
      item.querySelector("title").textContent,
      item.querySelector("pubDate").textContent,
    ];
    const [clipIdElement, duration] = [
      item.getElementsByTagNameNS("https://omny.fm/rss-extensions", "clipId"),
      item.getElementsByTagNameNS(
        "http://www.itunes.com/dtds/podcast-1.0.dtd",
        "duration"
      ),
    ];
    const [trackId, trackDuration] = [
      clipIdElement.length > 0
        ? clipIdElement[0].textContent
        : item.querySelector("guid").textContent,
      duration.length > 0 ? duration[0].textContent : "----",
    ];

    itemObject.trackName = trackName;
    itemObject.trackId = trackId;
    itemObject.releaseDate = releaseDate;
    itemObject.trackDuration = trackDuration;
    itemList.push(itemObject);
  }
  podcastObject.author = author;
  podcastObject.tittle = title;
  podcastObject.image = imageUrl;
  podcastObject.description = description;
  podcastObject.itemList = itemList;
  return podcastObject;
};
