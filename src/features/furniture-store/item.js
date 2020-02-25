import React from "react";
import { StyledItem } from "./styled-item";
import ItemViewer from "./item-viewer/item-viewer";
import ItemThumbnail from "./item-thumbnail/item-thumbnail";

const chairs = [
  {
    info: "Luchitino blue Armchair by Rodrigo",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-blue.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-blue.jpg")
    ],
    backgroundColor: "#4d4d59"
  },
  {
    info: "Luchitino red Armchair by Rodrigo",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-brown.jpg")
    ],
    backgroundColor: "#4a292e"
  },
  {
    info: "Luchitino orange Armchair by Rodrigo",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-orange.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-orange.jpg")
    ],
    backgroundColor: "#99460b"
  },
  {
    info: "Ein Kartofel green Armchair by Hans Zimmer",
    images: [
      require("../../assets/images/furniture-store/armchairs/2/pose-1/armchair-green.jpg"),
      require("../../assets/images/furniture-store/armchairs/2/pose-2/armchair-green.jpg")
    ],
    backgroundColor: "#0a2417"
  },
  {
    info: "Ein Kartofel orange Armchair by Hans Zimmer",
    images: [
      require("../../assets/images/furniture-store/armchairs/2/pose-1/armchair-orange.jpg"),
      require("../../assets/images/furniture-store/armchairs/2/pose-2/armchair-orange.jpg")
    ],
    backgroundColor: "#c95a0a"
  },
  {
    info: "Ein Kartofel yellow Armchair by Hans Zimmer",
    images: [
      require("../../assets/images/furniture-store/armchairs/2/pose-1/armchair-yellow.jpg"),
      require("../../assets/images/furniture-store/armchairs/2/pose-2/armchair-yellow.jpg")
    ],
    backgroundColor: "#ccc01f"
  }
];

const Item = () => {
  return (
    <StyledItem>
      <ItemViewer id="item-viewer" chairs={chairs} />
      <ItemThumbnail id="item-thumbnail" chairs={chairs} />
    </StyledItem>
  );
};

export default Item;
