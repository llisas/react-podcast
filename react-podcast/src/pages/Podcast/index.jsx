import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPodcastDetails } from "../../hooks/useFetchPodcastDetails";
import PodCastsDetail from "../../components/PodCastsDetail";

const Podcast = () => {
  const { id } = useParams();
  const [podcasts] = useFetchPodcastDetails(id);
  return (
    <>
      <PodCastsDetail podcastList={podcasts}></PodCastsDetail>
    </>
  );
};
export default Podcast;
