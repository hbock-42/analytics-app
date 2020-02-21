import React, { useState } from "react";
import { StyledItemViewer } from "./styled-item-viewer";

const chairImages = [
  require("../../../assets/images/furniture-store/armchairs/1/pose-1/armchair-blue.jpg"),
  require("../../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
  require("../../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
  require("../../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
  require("../../../assets/images/furniture-store/armchairs/1/pose-1/armchair-orange.jpg")
];

const ItemViewer = () => {
  const [currentId, setCurrentId] = useState(0);
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
          {chairImages.map((item, i) => (
            <img
              key={i}
              className={classNames(
                "item",
                { "selected-item": i === currentId },
                { "left-item": i === currentId - 1 },
                { "right-item": i === currentId + 1 },
                { "hidden-item": i < currentId - 1 || i > currentId + 1 }
              )}
              src={item}
              alt="chair"
            />
          ))}
        </div>
        <div className="page-selector"></div>
        <div className="social-media"></div>
        <div className="onTop">
          <button
            onClick={() => setCurrentId(currentId > 0 ? currentId - 1 : 0)}
          >
            -
          </button>
          <button
            onClick={() =>
              setCurrentId(
                currentId < chairImages.length - 1 ? currentId + 1 : currentId
              )
            }
          >
            +
          </button>
        </div>
      </div>
    </StyledItemViewer>
  );
};

// const renderImages

export default ItemViewer;
