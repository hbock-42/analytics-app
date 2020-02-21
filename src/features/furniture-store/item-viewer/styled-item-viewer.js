import styled from "styled-components";

export const StyledItemViewer = styled.div`
  /* debug values */
  width: 50%;
  /* background-color: red; */

  .onTop {
    z-index: 5;
    position: absolute;
  }

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
      transition: transform 1s;
    }

    .selected-item {
      z-index: 1;
      position: absolute;
      top: -9999px;
      bottom: -9999px;
      left: -9999px;
      right: -9999px;
      margin: auto;
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
      transform: translateX(80%) scale(0.3);
    }

    .hidden-item {
      display: none;
    }
  }
`;
