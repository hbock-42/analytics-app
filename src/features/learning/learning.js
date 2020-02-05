import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { StyledLearning } from "./styled-learning";

const Learning = () => {
  var bars = [];
  const barsNumbers = [];
  const days = 7;

  for (let i = 0; i < days; i++) {
    bars.push(
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        <div key={i + "bars"}>
          <div key={i + "barsChild"}></div>
        </div>
      </ReactCSSTransitionGroup>
    );
    barsNumbers.push(<p key={i + "p"}>{i + 1}</p>);
  }

  return (
    <StyledLearning width="100%" height="100%" days={days}>
      <div className="container">
        <div className="header">
          <h2>Learning dynamics</h2>
          <div className="dotElement">
            <div></div>
            <p>Learning time</p>
          </div>
        </div>
        <div className="learningChart">
          <div className="horizontal">
            <div className="numbers">
              <p>100h</p>
              <p>75h</p>
              <p>50h</p>
              <p>0h</p>
            </div>
            <div className="lines">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="vertical">
            <div className="bars">{bars}</div>
            <div className="numbers">{barsNumbers}</div>
          </div>
        </div>
      </div>
    </StyledLearning>
  );
};

export default Learning;
