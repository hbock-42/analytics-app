import React from "react";
import { StyledItemThumbnail } from "./styled-item-thumbnail";
import { useSelector, useDispatch } from "react-redux";

const ItemThumbnail = ({ chairs }) => {
  const modelId = useSelector(state => state.furniture.modelId);
  const dispatch = useDispatch();

  return (
    <StyledItemThumbnail
      backgroundColor={chairs[modelId].backgroundColor}
      nextBackgroundColor={
        chairs[(modelId + 1) % (chairs.length - 1)].backgroundColor
      }
    >
      <div className="thumbnail-container">
        {chairs[modelId].images.map((item, i) => (
          <div
            key={modelId + "-" + i}
            onClick={event =>
              dispatch({
                type: "SELECT_POSE",
                payload: i
              })
            }
            className="img-container"
          >
            <img
              onLoad={event => {
                event.target.classList.add("fade-in");
              }}
              src={item}
              alt="chair-pose"
            />
          </div>
        ))}
      </div>
    </StyledItemThumbnail>
  );
};

export default ItemThumbnail;
