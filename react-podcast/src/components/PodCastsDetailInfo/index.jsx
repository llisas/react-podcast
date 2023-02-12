import React from "react";

const PodCastsDetailInfo = ({ img, description, tittle, author }) => {
  return (
    <div className="details-info__container">
      <img
        alt="pop cast presentation art work"
        src={img}
        className="details-info__container-image"
      />
      <hr />
      <div className="details-info__bold">
        {tittle}
        <p className="details-info__cursive"> by {author}</p>
      </div>

      <hr />
      <h4>Description:</h4>
      <div
        className="details-info__description details-info__cursive"
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
};

export default PodCastsDetailInfo;
