import React from "react";
import { StyledItemThumbnail } from "./styled-item-thumbnail";
import { useSelector, useDispatch } from "react-redux";

const ItemThumbnail = ({ chairImages }) => {
  const modelId = useSelector(state => state.furniture.modelId);
  const modelPose = useSelector(state => state.furniture.modelPose);
  const dispatch = useDispatch();
  return (
    <StyledItemThumbnail>
      <div className="thumbnail-container">
        {chairImages[modelId].map((item, i) => (
          <div
            key={i}
            onClick={event =>
              dispatch({
                type: "SELECT_POSE",
                payload: i
              })
            }
            className="img-container"
          >
            <img src={item} alt="chair-pose" />
          </div>
        ))}
      </div>
    </StyledItemThumbnail>
  );
};

export default ItemThumbnail;
