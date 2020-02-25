import styled from "styled-components";

export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    margin: 5%;
    flex-direction: row;

    & > * {
      width: 50%;
    }

    .right-elem {
      display: flex;
      flex-direction: column;

      & > *:first-child {
        order: 1;
      }

      & > *:nth-child(2) {
        flex-grow: 1;
      }
    }
  }
`;
