import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Header = () => {
  const { loading } = useContext(AppContext);
  // const loading  =true;
  return (
    <>
      <div className="header__container">
        <Link to="/">Podcaster</Link>
        {loading && <div className="header__loading"></div>}
      </div>
    </>
  );
};

export default Header;


