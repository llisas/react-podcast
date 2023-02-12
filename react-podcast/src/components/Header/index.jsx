import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <Link className="header__container" to="/">Podcaster</Link>
      <hr />
    </>
  );
};

export default Header;
