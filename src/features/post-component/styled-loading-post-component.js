import styled from "styled-components";

export const StyledLoadingPostComponent = styled.div`
  --color-block: rgb(170, 170, 180);
  .container {
    display: flex;
    flex-direction: column;

    height: 230px;
    background-color: white;
    border-radius: 8px;
    padding: 15px;

    & > * {
      margin: 10px;
      flex-grow: 1;
    }
  }

  .header {
    display: flex;

    .image {
      height: 60px;
      width: 60px;
      background-color: var(--color-block);
    }

    .title-right {
      height: 60px;
      flex-grow: 1;
      margin-left: 15px;
      display: flex;
      flex-direction: column;

      * {
        flex-grow: 1;
        background-color: var(--color-block);
      }

      .title {
        margin-bottom: 15px;
      }
    }
  }

  .content {
    flex-grow: 3;

    background-color: var(--color-block);
  }

  .salary {
    flex-grow: 3;

    background-color: var(--color-block);
  }
`;
