import React from "react";
import { StyledLoadingPostComponent } from "./styled-loading-post-component";

const LoadingPostComponent = () => (
  <StyledLoadingPostComponent>
    <div className="container">
      <div className="header">
        <div className="image element"></div>
        <div className="title-right">
          <div className="title element"></div>
          <div className="sub-title element"></div>
        </div>
      </div>
      <div className="content element"></div>
      <div className="salary element"></div>
    </div>
  </StyledLoadingPostComponent>
);

export default LoadingPostComponent;
