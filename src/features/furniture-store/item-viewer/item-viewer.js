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
                { "left-item": i < currentId },
                { "right-item": i > currentId }
              )}
              src={item}
              alt="chair"
            />
          ))}
        </div>
        <div className="page-selector">
          <div className="black-bar" />
          {chairImages.map((item, i) => (
            <div
              className="button-div"
              key={i}
              onClick={event =>
                setCurrentId(
                  parseInt(event.currentTarget.firstChild.textContent) - 1
                )
              }
            >
              <p
                className={classNames("page-number", {
                  "page-number-selected": i === currentId
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
              setCurrentId(
                currentId < chairImages.length - 1 ? currentId + 1 : currentId
              )
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
