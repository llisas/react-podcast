import { render, screen } from "@testing-library/react";
import Player from "../../../components/PodcastEpisodePlayer";
import "@testing-library/jest-dom/extend-expect";

describe("Player component", () => {
    test("Should render main page", () => {
        render(
          <Player
            tittle={"Test title"}
            description={"Test description"}
            urlPlayer={"https://www.test.com"}
          />
        );
        const titleElement = screen.getByText("Test title");
        const titleDescription = screen.getByText("Test description");
        expect(titleElement).toBeInTheDocument();
        expect(titleDescription).toBeInTheDocument();
      });
});
