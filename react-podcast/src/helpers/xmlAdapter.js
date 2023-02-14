export const extractHeaderData = (xmlDoc) => {
  const title = xmlDoc.querySelector("title").textContent;
  const description = xmlDoc.querySelector("description").textContent;
  const image = xmlDoc.querySelector("image");
  const imageUrl =
    image.getAttribute("href") || image.querySelector("url").textContent;
  const author = xmlDoc.getElementsByTagNameNS(
    "http://www.itunes.com/dtds/podcast-1.0.dtd",
    "author"
  )[0].textContent;
  return { author, title, image: imageUrl, description };
};

export const xmlDataComposer = (xmlDoc) => {
  const itemList = [];
  const podcastObject = { ...extractHeaderData(xmlDoc), itemList };
  const items = xmlDoc.querySelectorAll("item");
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
  return podcastObject;
};

export const xmlEpidoseComposer = (xmlDoc, episodeId) => {
  const itemObject = {};
  const items = xmlDoc.querySelectorAll("item");
  for (const item of items) {
    const id = item.querySelector("guid").textContent;

    if (id === episodeId) {
      const [title, description, urlPlayer] = [
        item.querySelector("title").textContent,
        item.querySelector("description").textContent,
        item.querySelector("enclosure").getAttribute("url"),
      ];
      itemObject.title = title;
      itemObject.description = description;
      itemObject.urlPlayer = urlPlayer;
    }
  }
  return itemObject;
};

export const xmlHeaderDataComposer = (xmlDoc) => {
  return extractHeaderData(xmlDoc);
};
