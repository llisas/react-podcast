import React from "react";

const PodcastEpisodePlayer = ({ tittle, description, urlPlayer }) => {
  return (
    <div className="__player_container">
      <div className="__player_text_bold"> {tittle}</div>
      <div
        className="__player_tex_italic"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <audio controls className="__player_podcast">
        <source src={urlPlayer} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default PodcastEpisodePlayer;
