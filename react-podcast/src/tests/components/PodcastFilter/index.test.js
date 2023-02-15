import { render, screen } from "@testing-library/react";
import Podcastfilter from "../../../components/PodcastFilter";
import "@testing-library/jest-dom/extend-expect";
import { allPodcast } from "../../mocks/index";

describe("Filter component", () => {
    test("Should return filter div", () => {
        render(
          <Podcastfilter
          allPodcast = {allPodcast} setPodcast ={{}}
          />
        );
      
      });
});
