import styled from "styled-components";

export const StyledHome = styled.div`
  height: 100vh;

  * {
    text-decoration: none;
    color: #f6a61e;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6a61e;

  .menu {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    justify-content: space-around;
    align-items: center;
    max-width: 260px;
    align-self: center;
    border-radius: 14px;
    padding: 10px;
  }

  .menu-item {
    display: flex;
    justify-content: center;

    width: 100px;
    height: 100px;
    padding: 10px 30px;
    border-radius: 14px;
    margin: 10px;
    background-color: #443b8f;
    box-shadow: 10px 4px 30px rgba(0, 0, 0, 0.4);

    transition: box-shadow 0.2s, transform 0.2s, border-radius 0.2s;

    :hover {
      box-shadow: 15px 7px 40px rgba(0, 0, 0, 0.7);
      border-radius: 60px;
      transform: scale(1.3);
      & > * {
        transform: scale(1.2);
      }
    }

    & > * {
      transition: transform 0.2s;
      align-self: center;
      text-align: center;
    }
  }
`;
