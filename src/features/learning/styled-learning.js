import styled, { css } from "styled-components";

function createBarsCss(fillPercents) {
  let styles = "";

  for (let i = 0; i < fillPercents.length; i += 1) {
    styles += `
    & > span:nth-child(${i + 1}) {
        & > div > div {
          height: ${Math.max(8, fillPercents[i])}%;
        }
      }
       `;
  }

  return css`
    ${styles}
  `;
}

export const StyledLearning = styled.div`
  font-family: "Abel", sans-serif;
  color: rgb(90, 90, 110);

  .forceHeightZero {
    height: 0 !important;
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header {
    margin-left: 60px;
    margin-bottom: 20px;

    h2 {
      margin-bottom: 40px;
      color: rgb(40, 45, 60);
      text-align: left !important;
    }

    .dotElement {
      display: flex;
      > div {
        align-self: center;
        background-color: rgb(61, 27, 195);
        width: 12px;
        height: 12px;
        border-radius: 6px;
      }
      p {
        margin-left: 14px;
        line-height: 18px;
        height: 18px;
      }
    }
  }

  .learningChart {
    position: relative;
    width: 100%;
    height: 100%;

    .horizontal {
      position: absolute;
      display: flex;
      width: 100%;
      height: calc(100% - 45px);

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }

      .numbers {
        width: 60px;
        text-align: end;
        & > * {
          align-self: flex-end;
          padding-right: 20px;
          height: 15px;
          width: 40px;
        }

        & > *:last-child {
          color: transparent;
        }
      }

      .lines {
        width: 100%;

        & > div {
          height: 15px;
          width: 100%;
          border-bottom: solid 1px rgba(90, 90, 110, 0.1);
        }
      }
    }

    .vertical {
      position: absolute;
      right: 0;
      width: calc(100% - 60px);
      height: 100%;

      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      }

      .bars {
        height: calc(100% - 45px);

        & > span {
          display: flex;
          height: 100%;
        }

        & > span > div {
          align-self: flex-end;
          display: flex;
          height: 100%;
          & > div {
            align-self: flex-end;
            width: 12px;
            background: linear-gradient(rgb(61, 27, 195), rgb(86, 19, 154));
            border-radius: 6px;
          }
        }

        ${props => createBarsCss(props.fillPercents)};
      }

      .numbers {
        height: 45px;

        & > * {
          padding-top: 20px;
          height: 40px;
        }
      }
    }
  }

  .barChild {
    position: relative;

    :hover {
      .barHover {
        display: block;
      }
    }

    .barHover {
      display: none;
      position: absolute;
      padding: 2px 7px;
      background-color: rgb(237, 232, 253);
      border-radius: 3px;
      left: 50%;
      top: -4px;
      transform: translate(-50%, -100%);
      border: 1px rgb(100, 100, 100, 0.07) solid;

      p {
        font-size: 13px;
      }
    }
  }

  .example-appear {
    height: 0 !important;
  }

  .example-appear.example-appear-active {
    height: 100% !important;
    transition: height 0.8s cubic-bezier(0.88, 0.07, 0.32, 0.84);
  }
`;
