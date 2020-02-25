import styled from "styled-components";

export const StyledItemInfos = styled.div`
  background-color: #ebebed;
  color: #393a4a;

  .infos-container {
    height: 100%;
    padding: 5.5% 9% 3% 9%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .infos-header {
    display: flex;

    .info-menu {
      flex-grow: 1;
      display: flex;

      p {
        margin-right: 7%;

        :hover {
          color: black;
        }
      }
    }

    .infos-mini-buttons {
      display: flex;

      img {
        height: 16px;
        margin-left: 14px;

        transition: transform 0.2s;
        :hover {
          transform: scale(1.3);
        }
      }
    }
  }

  .infos-content {
    & > *:first-child {
      font-size: 13px;
      margin-bottom: 5%;
      margin-top: 5%;
    }

    & > h1 {
      font-size: 28px;
      margin-bottom: 10%;
    }

    .info-description {
      display: flex;
      margin-bottom: 15%;

      div {
        margin-top: 7px;
        margin-right: 4%;
        background-color: black;
        height: 1px;
        width: 12%;
      }
      p {
        width: 70%;
      }
    }

    .infos-buttons {
      display: flex;
      margin-bottom: 5%;

      .button {
        border: 1px #393a4a solid;
        padding: 8px 30px;
        margin-right: 4%;
        transition: transform 0.2s;

        p {
          font-size: 13px;
          user-select: none;
        }

        :hover {
          transform: scale(1.1);
        }
      }

      .button.dark {
        background-color: #393a4a;
        color: #ebebed;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .ratio-keeper {
      width: 100%;
      padding-top: 100%;
      position: relative;
    }

    .infos-container {
      position: absolute;
      top: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .ratio-keeper {
      height: 100%;
    }
  }
`;
