import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div className="articles__link">
      <Link to="/ ">
        <button className="articles__button">Articles</button>
      </Link>
    </div>
  );
};

export default Nav;
