import React from "react";
import Geography from "../geography/geography";
import Learning from "../learning/learning";
import InfoCard from "../info-card/info-card";

import { StyledAnalyticBoard } from "./styled-analytic-board";

const AnalyticBoard = () => {
  return (
    <StyledAnalyticBoard>
      <div className="header">
        <p>Welcom Hugo</p>
        <h1>Your analytic board</h1>
      </div>
      <div className="graphs">
        <Geography />
        <Learning className="learning" />
        <InfoCard />
      </div>
    </StyledAnalyticBoard>
  );
};

export default AnalyticBoard;
