import React from "react";
import { StyledItem } from "./styled-item";
import ItemViewer from "./item-viewer/item-viewer";
import ItemThumbnail from "./item-thumbnail/item-thumbnail";

const chairImages = [
  [
    require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-blue.jpg"),
    require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-blue.jpg")
  ],
  [
    require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
    require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-brown.jpg")
  ],
  [
    require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-orange.jpg"),
    require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-orange.jpg")
  ],
  [
    require("../../assets/images/furniture-store/armchairs/2/pose-1/armchair-green.jpg"),
    require("../../assets/images/furniture-store/armchairs/2/pose-2/armchair-green.jpg")
  ],
  [
    require("../../assets/images/furniture-store/armchairs/2/pose-1/armchair-orange.jpg"),
    require("../../assets/images/furniture-store/armchairs/2/pose-2/armchair-orange.jpg")
  ],
  [
    require("../../assets/images/furniture-store/armchairs/2/pose-1/armchair-yellow.jpg"),
    require("../../assets/images/furniture-store/armchairs/2/pose-2/armchair-yellow.jpg")
  ]
];

const chairs = [
  {
    info: "Luchitino blue Armchair by Rodrigo",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-blue.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-blue.jpg")
    ]
  },
  {
    info: "Luchitino red Armchair by Rodrigo",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-blue.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-blue.jpg")
    ]
  },
  {
    info: "Luchitino orange Armchair by Rodrigo",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-blue.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-blue.jpg")
    ]
  },
  {
    info: "Ein Kartofel green Armchair by Hans Zimmer",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-brown.jpg")
    ]
  },
  {
    info: "Ein Kartofel orange Armchair by Hans Zimmer",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-brown.jpg")
    ]
  },
  {
    info: "Ein Kartofel yellow Armchair by Hans Zimmer",
    images: [
      require("../../assets/images/furniture-store/armchairs/1/pose-1/armchair-brown.jpg"),
      require("../../assets/images/furniture-store/armchairs/1/pose-2/armchair-brown.jpg")
    ]
  }
];

const Item = () => {
  return (
    <StyledItem>
      <ItemViewer id="item-viewer" chairImages={chairImages} />
      <ItemThumbnail id="item-thumbnail" chairImages={chairImages} />
    </StyledItem>
  );
};

export default Item;
