import React from "react";

const PodcastEpisodePlayer = ({ tittle, description, urlPlayer }) => {
 //TODO 
  return (
    <div className="__player_container">
      
       <div className="__player_text_bold"> {tittle}</div>
      <div className="__player_tex_italic" dangerouslySetInnerHTML={{ __html: description }} /> 
      <video controls className="__player_podcast">
        <source src={urlPlayer} type="audio/mp4" />
        <source src={urlPlayer} type="audio/mp3" />
      </video>
    </div>
  );
};

export default PodcastEpisodePlayer;
