import React from "react";
import { StyledMenuShortcut } from "./styled-menu-shortcut";
import Menu from "../home/menu";

const MenuShortcut = () => {
  return (
    <StyledMenuShortcut>
      <div className="element-menu-shortcut">
        {/* <h1 className="menu-shortcut-title">Home</h1> */}
        <Menu className="menu" />
      </div>
    </StyledMenuShortcut>
  );
};

export default MenuShortcut;
