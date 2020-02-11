import styled from "styled-components";

export const StyledLoadingPostComponent = styled.div`
  --color-block: rgb(210, 210, 220);
  .container {
    display: flex;
    flex-direction: column;

    height: 230px;
    background-color: white;
    border-radius: 8px;
    padding: 15px;

    & > * {
      margin: 15px;
    }
  }

  .header {
    display: flex;

    .image {
      height: 60px;
      width: 60px;
    }

    .title-right {
      height: 60px;
      flex-grow: 1;
      margin-left: 15px;
      display: flex;
      flex-direction: column;

      * {
        flex-grow: 1;
      }

      .title {
        margin-bottom: 15px;
      }
    }
  }

  .content {
    flex-grow: 1;
  }

  .salary {
    flex-grow: 1;
  }

  .element {
    background-color: var(--color-block);

    animation-name: load;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    transform-origin: 0 0;
  }

  @keyframes load {
    0% {
      transform: scaleX(0);
    }
    40% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(1);
    }
  }
`;
