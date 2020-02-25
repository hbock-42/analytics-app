import React from "react";
import { StyledItemInfos } from "./styled-item-infos";
import { useSelector, useDispatch } from "react-redux";

const ItemInfos = ({ chairs }) => {
  const modelId = useSelector(state => state.furniture.modelId);
  return (
    <StyledItemInfos>
      <div className="ratio-keeper">
        <div className="infos-container">
          <div className="infos-header">
            <div className="info-menu">
              <p>Home</p>
              <p>Catalog</p>
              <p>About</p>
            </div>
            <div className="infos-mini-buttons">
              <img
                src={require("../../../assets/images/furniture-store/icons/heart.png")}
                alt="heart icon"
              />
              <img
                src={require("../../../assets/images/furniture-store/icons/shopping-cart.png")}
                alt="shopping cart icon"
              />
              <img
                src={require("../../../assets/images/furniture-store/icons/search.png")}
                alt="search icon"
              />
            </div>
          </div>
          <div></div>
          <div className="infos-content">
            <p className="upper-case">New collection</p>
            <h1>{chairs[modelId].info}</h1>
            <div className="info-description">
              <div />
              <p>
                Explore a wide range of well-crafted premium quality furniture
              </p>
            </div>
            <div className="infos-buttons">
              <div className="button dark">
                <p>Buy now</p>
              </div>
              <div className="button">
                <p>Explore</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </StyledItemInfos>
  );
};

export default ItemInfos;
