import styled from "styled-components";

export const StyledAnalyticBoard = styled.div`
  height: fit-content;
  width: fit-content;

  padding: 40px 70px;
  font-family: "Abel", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 14px;
  background-color: white;
  text-align: center;

  .header {
    h1 {
      color: rgb(86, 19, 154);
    }
  }
  .graphs {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > * {
      margin: 30px 0;
      align-self: center;
    }

    > *:nth-child(2) {
      width: 100%;
      height: 320px;
    }
  }

  @media only screen and (min-width: 910px) {
    text-align: left;
    .graphs {
      margin-top: 40px;
      flex-direction: row;
      & > div:first-child {
        & > div {
          text-align: left;
        }
      }

      & > * {
        margin-top: 0;
        margin-bottom: 0;
        align-self: stretch;
      }
      & > *:not(:last-child) {
        margin-right: 50px;
      }

      & > *:nth-child(2) {
        height: auto;
        align-self: stretch;
      }
    }
  }
`;
