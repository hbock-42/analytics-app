import styled from "styled-components";

function hoursToDeg(hours) {
  return (((1.0 * hours) % 12) / 12.0) * 360.0 + "deg";
}

function minutesOrSecondsToDeg(minOrSec) {
  return ((1.0 * minOrSec) / 60.0) * 360.0 + "deg";
}

function timeBarCss(numberOfBars) {
  var style = "";
  for (let i = 0; i < numberOfBars; i++) {
    style += `& > *:nth-child(${i + 1}) {
        top: ${((Math.sin((-i / numberOfBars) * 2 * Math.PI) + 1) / 2) * 100}%;
        left: ${((Math.cos((-i / numberOfBars) * 2 * Math.PI) + 1) / 2) * 100}%;
        transform: translateX(${-Math.abs(
          Math.cos((-i / numberOfBars) * 2 * Math.PI)
        ) * 50}%) rotateZ(${(-i / numberOfBars + 0.25) * 2 * Math.PI}rad);
    }`;
  }
  return style;
}

export const StyledClock = styled.div`
  height: 800px;
  width: 100%;

  /* theme definition */
  /* colors */
  --main-color: ${props =>
    props.mainColor === "dark" ? "#24365A" : "rgb(227, 237, 247)"};
  --secondary-color: ${props =>
    props.mainColor === "dark" ? "#24365A" : "#9AB0CF"};
  --hours-color: ${props =>
    props.mainColor === "dark" ? "rgb(227, 237, 247)" : "#3c445c"};
  --minutes-color: ${props =>
    props.mainColor === "dark" ? "rgb(191, 191, 191)" : "rgb(131, 131, 131)"};
  --seconds-color: rgb(248, 92, 115);
  --time-color: ${props =>
    props.mainColor === "dark" ? "rgb(191, 191, 191)" : "rgb(185, 185, 210)"};

  /* size */
  --container-size: ${props =>
    props.containerSize !== undefined ? props.containerSize + "px" : "100px"};
  --size-10-percent: ${props =>
    props.containerSize !== undefined
      ? props.containerSize * 0.1 + "px"
      : "100px"};

  --shadow-outer: ${props =>
    props.mainColor === "dark"
      ? props.containerSize * 0.05 * 0.9 +
        "px " +
        props.containerSize * 0.05 * 0.9 +
        "px " +
        props.containerSize * 0.1 * 0.9 +
        "px #1d2b48, -" +
        props.containerSize * 0.05 * 0.9 +
        "px -" +
        props.containerSize * 0.05 * 0.9 +
        "px " +
        props.containerSize * 0.1 * 0.9 +
        "px #2b416c;"
      : props.containerSize * 0.05 * 0.9 +
        "px " +
        props.containerSize * 0.05 * 0.9 +
        "px " +
        props.containerSize * 0.1 * 0.9 +
        "px #c1c9d2, -" +
        props.containerSize * 0.05 * 0.9 +
        "px -" +
        props.containerSize * 0.05 * 0.9 +
        "px " +
        props.containerSize * 0.1 * 0.9 +
        "px #ffffff;"};

  --shadow-inner: ${props =>
    props.mainColor === "dark"
      ? props.containerSize * 0.03 * 0.46 +
        "px " +
        props.containerSize * 0.03 * 0.46 +
        "px " +
        props.containerSize * 0.06 * 0.46 +
        "px #1d2b48, -" +
        props.containerSize * 0.03 * 0.46 +
        "px -" +
        props.containerSize * 0.03 * 0.46 +
        "px " +
        props.containerSize * 0.06 * 0.46 +
        "px #2b416c;"
      : props.containerSize * 0.03 * 0.46 +
        "px " +
        props.containerSize * 0.03 * 0.46 +
        "px " +
        props.containerSize * 0.06 * 0.46 +
        "px #c1c9d2, -" +
        props.containerSize * 0.03 * 0.46 +
        "px -" +
        props.containerSize * 0.03 * 0.46 +
        "px " +
        props.containerSize * 0.06 * 0.46 +
        "px #ffffff;"};

  background-color: var(--main-color);

  transition: background-color 0.4s;

  display: flex;
  justify-content: center;

  .container {
    position: relative;
    align-self: center;

    width: var(--container-size);
    height: var(--container-size);
  }

  .outer-circle {
    top: 5%;
    left: 5%;
    position: absolute;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    box-shadow: var(--shadow-outer);
    transition: box-shadow 0.4s;
  }

  .inner-circle {
    top: 27%;
    left: 27%;
    position: absolute;
    border-radius: 50%;
    width: 46%;
    height: 46%;
    box-shadow: var(--shadow-inner);
    transition: box-shadow 0.4s;
  }

  .clock-hands {
    position: absolute;
    height: 100%;
    width: 100%;

    & > div {
      transition: background-color 0.4s;
      width: 10px;
      border-radius: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 50% 0;
    }

    .hours {
      height: 30%;
      background-color: var(--hours-color);
      transform: rotateZ(${props => hoursToDeg(props.hours)}) rotateZ(180deg)
        translateY(-20px);
    }

    .minutes {
      height: 35%;
      background-color: var(--minutes-color);
      transform: rotateZ(${props => minutesOrSecondsToDeg(props.minutes)})
        rotateZ(180deg) translateY(-20px);
    }

    .seconds {
      height: 40%;
      background-color: var(--seconds-color);
      transform: rotateZ(${props => minutesOrSecondsToDeg(props.seconds)})
        rotateZ(180deg) translateY(-20px);
    }
  }

  .time-marks {
    position: absolute;
    height: 100%;
    width: 100%;

    & > div {
      width: 10px;
      height: 6%;
      transform-origin: 50% 0;
      position: absolute;
      background-color: var(--time-color);
    }

    ${props => timeBarCss(4)}
  }
`;
