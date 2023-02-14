import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Podcast from "./pages/Podcast";
import Episode from "./pages/Episode";
import Header from "./components/Header";
import { PodcastSelectedContext } from "./context/PodcastSelectedContext";
import { EpisodeSelectedContext } from "./context/EpisodeSelectedContext";

function App() {
  const [state, setState] = useState({});
  const [episode, setEpisode] = useState({});

  return (
    <>
      <PodcastSelectedContext.Provider value={{ state, setState }}>
        <EpisodeSelectedContext.Provider value={{ episode, setEpisode }}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/podcast/:podcastId" element={<Podcast />} />
            <Route
              path="/podcast/:podcastId/episode/:episodeId"
              element={<Episode />}
            />
          </Routes>
        </EpisodeSelectedContext.Provider>
      </PodcastSelectedContext.Provider>
    </>
  );
}

export default App;
