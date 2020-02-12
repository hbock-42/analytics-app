import styled from "styled-components";

export const StyledPostComponent = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    padding: 15px;
    color: rgb(90, 90, 90);

    & > * {
      margin: 15px;
    }

    p {
      color: rgb(170, 170, 180);
    }
  }

  .header {
    display: flex;

    .image {
      height: 50px;
      margin-right: 15px;
      & > img {
        border-radius: 12px;
        height: 50px;
        width: auto;
      }
    }

    .title-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-width: 0;

      & > * {
        min-width: 0;
      }
    }
  }

  .hidden-comments {
    margin-top: 0;
    margin-bottom: 0;
    overflow: hidden;
    transition: height 0.3s ease-out, margin 0.3s ease-out;
    height: 0;
  }
`;
