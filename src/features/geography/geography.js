import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { StyledGeography } from "./styled-geography";

const Geography = () => (
  <StyledGeography radius="100" lineWidth="40" radiusUnity="px">
    <div>
      <h2 className="title">Geography</h2>
      <div className="circularChart">
        <div>
          <div>
            <ReactCSSTransitionGroup
              transitionName="centralText"
              transitionAppear={true}
              transitionAppearTimeout={800}
              transitionEnter={false}
              transitionLeave={false}
            >
              <h2>39856</h2>
              <p>learners</p>
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
      <div className="countries">
        <div>
          <p>France</p>
          <div></div>
        </div>
        <div>
          <p>Germany</p>
          <div></div>
        </div>
        <div>
          <p>Italy</p>
          <div></div>
        </div>
      </div>
    </div>
  </StyledGeography>
);

export default Geography;
