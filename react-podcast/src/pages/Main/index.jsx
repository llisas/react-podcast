import React, { useEffect, useState } from "react";
import { getPodCast } from "../../services/getPodCast";
import PodCard from "../../components/PodCard";

const Main = () => {
  const [podcast, setPodCast] = useState({});
  useEffect(() => {
    async function fetchPodCast() {
      const response = await getPodCast();
      setPodCast(response);
    }
    fetchPodCast();
  }, []);

  return (
    <div>
      HELLO FROM THE MAIN SCREEN
      <PodCard></PodCard>
    </div>
  );
};

export default Main;
