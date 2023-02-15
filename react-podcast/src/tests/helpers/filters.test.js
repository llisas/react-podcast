import { filterPodcastByName } from "../../helpers/filters";
const { allPodcast } = require('../mocks/index');
describe("filterPodcastByName", () => {
 
  test("returns allPodcast when text is empty", () => {
    expect(filterPodcastByName(allPodcast, "")).toEqual(allPodcast);
  });

  test("filters podcasts by name and artist", () => {
    const filteredPodcasts = filterPodcastByName(allPodcast, "rogan");
    expect(filteredPodcasts).toEqual([
      {
        "im:name": { label: "The Joe Rogan Experience" },
        "im:artist": { label: "Joe Rogan" },
      },
    ]);
  });
});
