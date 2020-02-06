import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { StyledInfoCard } from "./styled-info-card";

const InfoCard = () => {
  return (
    <StyledInfoCard>
      <div className="container">
        <ReactCSSTransitionGroup
          transitionName="slideUp"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="textCard">
            <p>important</p>
          </div>
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup
          transitionName="slideUp"
          transitionAppear={true}
          transitionAppearTimeout={800}
          transitionEnter={false}
          transitionLeave={false}
        >
          <div className="icon">
            <img
              src={require("../../assets/images/info-card/badge.png")}
              alt="badge"
            />
          </div>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="slideUp"
          transitionAppear={true}
          transitionAppearTimeout={1600}
          transitionEnter={false}
          transitionLeave={false}
        >
          <h1>New exams</h1>
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          transitionName="slideUpHalfOpacity"
          transitionAppear={true}
          transitionAppearTimeout={1200}
          transitionEnter={false}
          transitionLeave={false}
        >
          <p className="content">
            New certifications and exams available for the learners
          </p>
        </ReactCSSTransitionGroup>
      </div>
    </StyledInfoCard>
  );
};

export default InfoCard;
