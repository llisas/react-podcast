import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Podcast from "./pages/Podcast";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/podcast/:id" element={<Podcast />} />
      </Routes>
    </>
  );
}

export default App;
