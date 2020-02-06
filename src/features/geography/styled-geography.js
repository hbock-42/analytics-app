import styled from "styled-components";

export const StyledGeography = styled.div`
  font-family: "Abel", sans-serif;

  > div {
    width: fit-content;
    text-align: center;
    color: rgb(90, 90, 110);
  }

  .title {
    color: rgb(40, 45, 60);
    margin-bottom: 20px;
  }

  .circularChart {
    border-radius: 50%;
    width: ${props => 2 * props.radius + props.radiusUnity};
    height: ${props => 2 * props.radius + props.radiusUnity};
    background: rgb(40, 201, 219);
    box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.7);

    & > div {
      display: flex;
      align-items: center;
      text-align: center;

      transform: translate(
        ${props => props.lineWidth / 2 + props.radiusUnity},
        ${props => props.lineWidth / 2 + props.radiusUnity}
      );
      background-color: white;
      border-radius: 50%;
      width: ${props => 2 * props.radius - props.lineWidth + props.radiusUnity};
      height: ${props =>
        2 * props.radius - props.lineWidth + props.radiusUnity};
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.7);

      & > div {
        width: ${props =>
          2 * props.radius - props.lineWidth + props.radiusUnity};
        text-align: center;
      }
    }
  }

  .countries {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 15px;
      text-align: center !important;
    }

    & > * {
      & > div {
        margin: 5px auto;
        width: 40px;
        height: 6px;
        border-radius: 3px;
        background-color: blue;
      }
    }
  }

  .centralText-appear {
    transform: scale(0.8);
    opacity: 0;
  }

  .centralText-appear.centralText-appear-active {
    transform: scale(1);
    opacity: 1;
    transition-property: transform, opacity;
    transition-duration: 0.8s;
    transition-timing-function: cubic-bezier(0.88, 0.07, 0.32, 0.84);
  }
`;
