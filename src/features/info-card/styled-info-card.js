import styled from "styled-components";

export const StyledInfoCard = styled.div`
  max-width: 550px;
  min-width: 235px;
  background-color: rgb(68, 22, 201);
  color: white;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 40px;
  border-radius: 14px;
  overflow: hidden;

  .container {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    & > * {
      margin: 10px 0;
      align-self: center;
      text-align: center;
    }
  }

  .textCard {
    background-color: rgb(46, 88, 228);
    border-radius: 100px;
    width: fit-content;
    padding: 7px 30px;
    p {
      text-transform: uppercase;
    }
  }

  .icon {
    img {
      height: 60px;
      width: auto;
      filter: invert(100%);
      opacity: 0.5;
    }
  }

  .content {
    opacity: 0.5;
  }

  /* appearing animations */

  .slideUp-appear {
    opacity: 0;
    transform: translateY(50px);
  }
  .slideUp-appear.slideUp-appear-active {
    opacity: 1;
    transform: translateY(0);

    transition: transform 0.6s,
      opacity 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }

  .slideUpHalfOpacity-appear {
    opacity: 0;
    transform: translateY(50px);
  }
  .slideUpHalfOpacity-appear.slideUpHalfOpacity-appear-active {
    opacity: 0.5;
    transform: translateY(0);

    transition: transform 0.6s,
      opacity 0.4s cubic-bezier(0.895, 0.03, 0.685, 0.22);
  }
`;
