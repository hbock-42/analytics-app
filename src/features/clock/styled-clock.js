import styled, { css } from "styled-components";

function hoursToDeg(hours) {
  return (((1.0 * hours) % 12) / 12.0) * 360.0 + "deg";
}

function minutesOrSecondsToDeg(minOrSec) {
  return ((1.0 * minOrSec) / 60.0) * 360.0 + "deg";
}

export const StyledClock = styled.div`
  /* creation values */
  /* width: 400px;
  height: 300px; */
  height: 800px;
  width: 100%;

  /* theme definition */
  --hours-color: red;
  --minutes-color: green;
  --seconds-color: blue;
  --main-color: ${props =>
    props.mainColor === "dark" ? "#24365A" : "rgb(227, 237, 247)"};
  --secondary-color: ${props =>
    props.mainColor === "dark" ? "#24365A" : "#9AB0CF"};
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
  }

  .inner-circle {
    top: 27%;
    left: 27%;
    position: absolute;
    border-radius: 50%;
    width: 46%;
    height: 46%;
    box-shadow: var(--shadow-inner);
  }

  .clock-hands {
    position: relative;
    height: 100%;
    width: 100%;

    & > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 50% 0;
    }

    .hours {
      width: 10px;
      height: 30%;
      background-color: var(--hours-color);
      transform: rotateZ(${props => hoursToDeg(props.hours)}) rotateZ(180deg)
        translateY(-20px);
    }

    .minutes {
      width: 10px;
      height: 35%;
      background-color: var(--minutes-color);
      transform: rotateZ(${props => minutesOrSecondsToDeg(props.minutes)})
        rotateZ(180deg) translateY(-20px);
    }

    .seconds {
      width: 10px;
      height: 40%;
      background-color: var(--seconds-color);
      transform: rotateZ(${props => minutesOrSecondsToDeg(props.seconds)})
        rotateZ(180deg) translateY(-20px);
    }
  }
`;
