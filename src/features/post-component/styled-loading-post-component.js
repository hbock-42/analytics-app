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
    flex-grow: 1;

    background-color: var(--color-block);
  }

  .salary {
    flex-grow: 1;

    background-color: var(--color-block);
  }
`;
