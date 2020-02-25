import React from "react";
import { StyledItemViewer } from "./styled-item-viewer";
import { useSelector, useDispatch } from "react-redux";

const ItemViewer = ({ chairs }) => {
  const modelId = useSelector(state => state.furniture.modelId);
  const modelPose = useSelector(state => state.furniture.modelPose);
  const dispatch = useDispatch();
  var classNames = require("classnames");

  return (
    <StyledItemViewer>
      <div className="ratio-keeper">
        <div className="header">
          <img
            className="menu-icon"
            src={require("../../../assets/images/furniture-store/icons/menu.png")}
            alt="menu"
          />
          <h4>Galimberti</h4>
        </div>
        <div className="content">
          {chairs.map((item, i) =>
            item.images.map((pose, j) => {
              console.log("SRC = " + item[j]);

              return (
                <img
                  key={i + "-" + j}
                  className={classNames(
                    "item",
                    { "selected-item": i === modelId },
                    { "hidden-pose": i === modelId && j !== modelPose },
                    { "left-item": i < modelId },
                    { "right-item": i > modelId }
                  )}
                  src={item.images[j]}
                  alt="chair"
                />
              );
            })
          )}
        </div>
        <div className="page-selector">
          <div className="black-bar" />
          {chairs.map((item, i) => (
            <div
              className="button-div"
              key={i}
              onClick={event =>
                dispatch({
                  type: "SELECT_ITEM",
                  payload:
                    parseInt(event.currentTarget.firstChild.textContent) - 1
                })
              }
            >
              <p
                className={classNames("page-number", {
                  "page-number-selected": i === modelId
                })}
                src={item}
                alt="chair"
              >
                {i < 9 ? "0" + (i + 1) : i + 1}
              </p>
            </div>
          ))}
          <div
            className="arrow-div"
            onClick={event =>
              dispatch({
                type: "SELECT_ITEM",
                payload: modelId < chairs.length - 1 ? modelId + 1 : modelId
              })
            }
          >
            <img
              className="arrow-icon"
              src={require("../../../assets/images/furniture-store/icons/next.png")}
              alt="next"
            />
          </div>
        </div>
        <div className="social-media">
          <img
            src={require("../../../assets/images/furniture-store/icons/facebook.png")}
            alt="facebook"
          />
          <img
            src={require("../../../assets/images/furniture-store/icons/instagram.png")}
            alt="instagram"
          />
          <img
            src={require("../../../assets/images/furniture-store/icons/linkedin.png")}
            alt="linkedin"
          />
        </div>
      </div>
    </StyledItemViewer>
  );
};

export default ItemViewer;
