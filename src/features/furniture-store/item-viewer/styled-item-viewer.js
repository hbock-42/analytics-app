import styled from "styled-components";

export const StyledItemViewer = styled.div`
  /* debug values */
  /* width: 80%; */

  /* real value */
  background-color: white;

  .ratio-keeper {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }

  .container {
    width: 100%;
    height: 100%;
  }
  .header {
    z-index: 2;
    display: flex;
    position: absolute;
    top: 5%;
    left: 5%;

    .menu-icon {
      width: 10px;
    }
    h4 {
      margin-left: 15px;
    }
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    overflow: hidden;

    .item {
      transition: transform 1s, opacity 1s cubic-bezier(0.62, 0.02, 0.34, 0.99);
    }

    .selected-item {
      z-index: 1;
      position: absolute;
      top: -9999px;
      bottom: -9999px;
      left: -9999px;
      right: -9999px;
      margin: auto;
      opacity: 1;
      height: 70%;
    }
    .left-item {
      position: absolute;
      top: -9999px;
      bottom: -9999px;
      left: -9999px;
      right: -9999px;
      margin: auto;
      height: 70%;
      opacity: 0;
      transform: translateX(-80%) scale(0.3);
    }
    .right-item {
      position: absolute;
      top: -9999px;
      bottom: -9999px;
      left: -9999px;
      right: -9999px;
      margin: auto;
      height: 70%;
      opacity: 0;
      transform: translateX(80%) scale(0.3);
    }

    .hidden-item {
      display: none;
    }

    .hidden-pose {
      z-index: 0;
      transform: scale(0);
    }
  }

  .page-selector {
    position: absolute;
    width: 95%;
    bottom: 5%;
    left: 5%;

    display: flex;
    align-items: center;

    & > * {
      margin-right: 7px;
    }

    .black-bar {
      background-color: black;
      height: 1px;
      width: 20%;
      margin-right: 12px;
    }

    .page-number {
      font-size: 12px;
      user-select: none;
      transition: transform 1s, color 0.2s;
      :hover {
        color: #525252;
      }
    }

    .page-number-selected {
      transform: scale(2);
    }

    .arrow-div {
      padding: 0 3px;
      .arrow-icon {
        width: 10px;
      }

      transition: transform 0.2s;
      :hover {
        transform: scale(1.5);
      }
    }

    .button-div {
      padding: 4px;
    }
  }

  .social-media {
    z-index: 1;
    position: absolute;
    left: 5%;
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);

    img {
      width: 13px;
      margin: 10px 0;

      transition: transform 0.2s;
      :hover {
        transform: scale(1.5);
      }
    }
  }
`;
