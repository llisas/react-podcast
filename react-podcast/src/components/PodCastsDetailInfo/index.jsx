import React from "react";
import { useNavigate } from "react-router-dom";

const PodCastsDetailInfo = ({
  img,
  description,
  tittle,
  author,
  hasBackPage = true,
}) => {
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  };

  return (
    <div className="details-info__container">
      {hasBackPage ? (
        <img
          onClick={backButton}
          alt="pop cast presentation art work"
          src={img}
          className="details-info__container-image details-info__pointer"
        />
      ) : (
        <img
          alt="pop cast presentation art work"
          src={img}
          className="details-info__container-image"
        />
      )}

      <hr />
      <div className="details-info__bold">
        {tittle}

        {hasBackPage ? (
          <p
            onClick={backButton}
            className="details-info__cursive details-info__pointer"
          >
            {" "}
            by {author}
          </p>
        ) : (
          <p className="details-info__cursive"> by {author}</p>
        )}
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
