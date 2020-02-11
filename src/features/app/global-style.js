import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: grey;
  }

  * {
    font-family: "Abel", sans-serif;
    margin: 0;
    box-sizing: border-box;
  }

  /* styles for '...' */
  .limit-2lines {
    /* hide text if it more than N lines  */
    overflow: hidden;
    /* for set '...' in absolute position */
    position: relative;
    /* use this value to count block height */
    line-height: 1.2em;
    /* max-height = line-height (1.2) * lines max number (3) */
    max-height: 2.4em;
    /* fix problem when last visible word doesn't adjoin right side  */
    text-align: justify;
    /* place for '...' */
    margin-right: 0;
    padding-right: 1em;
  }
  /* create the ... */
  .limit-2lines:before {
    /* points in the end */
    content: "...";
    /* absolute position */
    position: absolute;
    /* set position to right bottom corner of block */
    right: 0;
    bottom: 0;
    /* margin-right: 15px; */
  }
  /* hide ... if we have text, which is less than or equal to max lines */
  .limit-2lines:after {
    /* points in the end */
    content: "";
    /* absolute position */
    position: absolute;
    /* set position to right bottom corner of text */
    right: 0;
    /* set width and height */
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    /* bg color = bg color under block */
    background: white;
  }

  /* uppercase the first letter */
  .upper-first::first-letter {
    text-transform: uppercase;
  }

  /* text-ellipsis */
  .text-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

`;
