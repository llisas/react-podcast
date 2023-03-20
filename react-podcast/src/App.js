import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Episode from "./pages/Episode";
import Main from "./pages/Main";
import Podcast from "./pages/Podcast";

function App() {
  const [loading, setLoading] = useState(false);
  const value = {
    loading,
    setLoading,
  };
  return (
    <>
      <AppContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/podcast/:podcastId" element={<Podcast />} />
          <Route
            path="/podcast/:podcastId/episode/:episodeId"
            element={<Episode />}
          />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
