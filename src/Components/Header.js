import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import "../Css/header.css";
import { useDatalayercontext } from "../Context/Datalayer";

function Header() {
  const [{ user }, dispatch] = useDatalayercontext();

  return (
    <div className="header">
      <div className="header_left">
        <SearchIcon />
        <input placeholder="Search for Artists,songs,podcasts" type="text" />
      </div>
      <div className="header_right">
        <Avatar src={user?.images[0]} alt="" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
