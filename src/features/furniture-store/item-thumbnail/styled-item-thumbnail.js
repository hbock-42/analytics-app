import styled from "styled-components";

export const StyledItemThumbnail = styled.div`
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
      transform: translateX(-10%);
    }
  }
`;
