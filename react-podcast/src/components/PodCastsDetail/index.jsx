import React from "react";
import PodCastsDetailInfo from "../PodCastsDetailInfo";
import PodCastsDetailGrid from "../PodCastsDetailGrid";
import { dateConverter } from "../../helpers/time";
const PodCastsDetail = ({ podcastList }) => {
  if(podcastList)
  return (
    <>
      <div className="details__container">
        {podcastList && (
         
          <div>
            <PodCastsDetailInfo
              img={podcastList.image}
              description={podcastList.description}
              tittle={podcastList.tittle}
              author={podcastList.author}
            ></PodCastsDetailInfo>
          </div>
        )}

          {podcastList && (
            <div className="details__episodes-container">
              <div className="details__episodes">
                <h3> Episodes: {podcastList.itemList.length}</h3>
              </div>
              <div className="details__grid-container details__grid_header">
                <div className="details__grid details__no-hover">
                  <div className="details__title details__bold">Tittle</div>
                  <div className="details__date details__bold">Date</div>
                  <div className="details__duration details__bold">
                    Duration
                  </div>
                </div>
                {podcastList.itemList.map(
                  ({ trackId, trackName, releaseDate, trackDuration }) => {
                    return (
                      <PodCastsDetailGrid
                        key={trackId}
                        id={trackId}
                        tittle={trackName}
                        date={dateConverter(releaseDate)}
                        duration={trackDuration}
                      ></PodCastsDetailGrid>
                    );
                  }
                )}
              </div>
            </div>
          )}
        
      </div>
    </>
  );
};
export default PodCastsDetail;
