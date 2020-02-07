import styled, { css } from "styled-components";

// var backgroundColor = ({props}) => props.mainColor == "dark" ?

export const StyledClock = styled.div`
  /* creation values */
  /* width: 400px;
  height: 300px; */
  height: 800px;
  width: 100%;

  /* theme definition */
  --main-color: ${props =>
    props.mainColor === "dark" ? "#24365A" : "rgb(227, 237, 247)"};
  --secondary-color: ${props =>
    props.mainColor === "dark" ? "#24365A" : "#9AB0CF"};
  --container-size: ${props =>
    props.containerSize !== undefined ? props.containerSize + "px" : "100px"};

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
      ? props.containerSize * 0.03 * 0.4 +
        "px " +
        props.containerSize * 0.03 * 0.4 +
        "px " +
        props.containerSize * 0.06 * 0.4 +
        "px #1d2b48, -" +
        props.containerSize * 0.03 * 0.4 +
        "px -" +
        props.containerSize * 0.03 * 0.4 +
        "px " +
        props.containerSize * 0.06 * 0.4 +
        "px #2b416c;"
      : props.containerSize * 0.03 * 0.4 +
        "px " +
        props.containerSize * 0.03 * 0.4 +
        "px " +
        props.containerSize * 0.06 * 0.4 +
        "px #c1c9d2, -" +
        props.containerSize * 0.03 * 0.4 +
        "px -" +
        props.containerSize * 0.03 * 0.4 +
        "px " +
        props.containerSize * 0.06 * 0.4 +
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
    top: 30%;
    left: 30%;
    position: absolute;
    border-radius: 50%;
    width: 40%;
    height: 40%;

    box-shadow: var(--shadow-inner);
  }
`;
