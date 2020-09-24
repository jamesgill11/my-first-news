import React from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <div>
      <Link to="/ ">
        <div className="articles__link">Articles</div>
      </Link>
    </div>
  );
};

export default Nav;
