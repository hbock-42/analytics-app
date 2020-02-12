import React from "react";
import { Link } from "react-router-dom";
import { StyledMenu } from "./styled-menu";

const Menu = () => {
  return (
    <StyledMenu>
      <div className="menu">
        <Link className="menu-item" to="/">
          <p>Home</p>
        </Link>
        <Link className="menu-item" to="/analytics">
          <p>Analytic Board</p>
        </Link>
        <Link className="menu-item" to="/clock">
          <p>Clock</p>
        </Link>
        <Link className="menu-item" to="/posts">
          <p>Posts</p>
        </Link>
      </div>
    </StyledMenu>
  );
};

export default Menu;
