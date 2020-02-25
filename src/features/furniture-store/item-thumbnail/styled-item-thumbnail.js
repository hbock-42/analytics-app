import styled from "styled-components";

export const StyledItemThumbnail = styled.div`
  background-color: ${props => props.backgroundColor};
  transition: background-color 1s;

  .thumbnail-container {
    display: flex;
    justify-content: center;
    padding: 2% 0;

    .img-container {
      width: 20%;
      margin: 0 2%;
      background-color: white;
      overflow: hidden;

      vertical-align: middle;
      text-align: center;
      display: table-cell;
    }

    img {
      display: block;
      margin: 8% auto;
      width: 120%;

      transition: transform 0.5s;
      transform: translateX(-10%);
      transform-origin: right center;

      :hover {
        transform: scale(1.2);
      }
    }
  }

  @keyframes fadein {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadein 1s ease;
  }
`;
