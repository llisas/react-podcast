import { Route, Routes, Link } from "react-router-dom";
import Main from "./pages/Main";
import Podcast from "./pages/Podcast";
import Episode from "./pages/Episode";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/podcast/:podcastId" element={<Podcast />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
      </Routes>
    </>
  );
}

export default App;
