import styled from "styled-components";

export const StyledComment = styled.div`
  .comment-container {
    display: flex;
    flex-direction: column;
    color: rgb(170, 170, 180);
    padding-left: 10px;
    font-size: 15px;

    .comment-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;

      .from {
        color: rgb(90, 90, 90);
      }

      .mail {
        color: rgb(90, 90, 90);
        &::before {
          content: "mail: ";
          color: rgb(170, 170, 180);
        }
      }
    }

    .comment-content {
      text-align: justify;
      font-size: 13px;
    }
  }
`;
