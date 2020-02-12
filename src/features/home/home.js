import React from "react";

import Menu from "./menu";
import { StyledHome } from "./styled-home";

const Home = () => {
  return (
    <StyledHome>
      <div>
        <Menu />
      </div>
    </StyledHome>
  );
};

export default Home;
