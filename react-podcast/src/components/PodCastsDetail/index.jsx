import React from "react";
import PodCastsDetailGrid from "../PodCastsDetaislGrid";
import { dateConverter, durationConverter } from "../../helpers/time";
const PodCastsDetail = ({ podcastList }) => {
  return (
    <> 
      {podcastList && (
        <div>
          <div className="details__episodes">
            <h3> Episodes: {podcastList.length}</h3>
          </div>
          <div className="details__grid-container details__grid_header">
            <div className="details__grid details__no-hover">
              <div className="details__title details__bold">Tittle</div>
              <div className="details__date details__bold">Date</div>
              <div className="details__duration details__bold">Duration</div>
            </div>
            {podcastList.map(
              ({ trackId, trackName, releaseDate, trackTimeMillis }) => {
                return (
                  <PodCastsDetailGrid
                    key={trackId} 
                    id={trackId}
                    tittle={trackName}
                    date={dateConverter(releaseDate)}
                    duration={durationConverter(trackTimeMillis)}
                  ></PodCastsDetailGrid>
                );
              }
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default PodCastsDetail;
