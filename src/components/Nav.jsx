import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <Link to="/">
        <div className="home__link">Home</div>
      </Link>
      <Link to="/articles">
        <div className="articles__link">Articles</div>
      </Link>
    </div>
  );
};

export default Nav;
