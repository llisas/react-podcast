import React from "react";

const PodCastList = ({ tittle, author, img }) => {
  return (
    <>
      <div className="pod__card">
        <div className="pod__card_img ">
          <img src={img} alt="Artist design cover " />
        </div>
        <div className="pod__card_info">
          <div className="pod__card_tittle">{tittle}</div>
          <div className="pod__card_author">Author:{author}</div>
        </div>
      </div>
    </>
  );
};

export default PodCastList;
