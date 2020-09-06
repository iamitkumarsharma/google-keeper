import React from "react";
import "./Header.css";
import AppBar from "@material-ui/core/AppBar";

function Header() {
  return (
    <div className="header">
      <AppBar className="header_appbar" color="primary" position="static">
        <h2>Note Keeper</h2>
      </AppBar>
    </div>
  );
}

export default Header;
