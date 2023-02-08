import React from "react";
import PropTypes from "prop-types";

const PodCard = (props) => {
  return (
    <>
      <div className="pod__card">
        <div className="pod__card_img ">
          <img
            src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
            alt="The podcast small logo "
          />
        </div>
        <div className="pod__card_info">
          <p>USER NAME</p>
          <a href="#!">loremIpsum.com</a>
        </div>
      </div>
    </>
  );
};

PodCard.propTypes = {};

export default PodCard;
