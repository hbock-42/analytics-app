import styled from "styled-components";

export const StyledMenuShortcut = styled.div`
  .element-menu-shortcut {
    display: flex;

    top: 0;
    left: 0;
    position: fixed;
    width: 70px;
    height: 70px;
    /* background-color: #f6a61e; */
    /* background-color: rgb(246, 166, 30, 0.2); */
    background-color: rgba(150, 150, 150, 0.6);
    backdrop-filter: blur(4px);
    border-radius: 0 0 100% 0;
    box-shadow: 0px 0px 15px 20px rgba(0, 0, 0, 0.1);

    transition-property: width height border-radius;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;

    :hover {
      width: 270px;
      height: 270px;
      border-radius: 0 0 15px 0;

      .menu {
        animation-name: show;
        animation-duration: 0.3s;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        transform-origin: 0 0;
      }
    }

    .menu {
      visibility: hidden;
      width: 260px;
    }

    @keyframes show {
      0% {
        visibility: hidden;
        opacity: 0;
        transform: scale(0);
      }
      100% {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`;
