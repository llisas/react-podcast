import React from "react";

const PodCastsDetailGrid = ({ tittle, date, duration, id }) => {
  return (
    <div id={id} className="details__grid">
      <div className="details__title details__grid_color">{tittle}</div>
      <div className="details__date details__grid_color">{date}</div>
      <div className="details__duration details__grid_color">{duration}</div>
    </div>
  );
};

export default PodCastsDetailGrid;
