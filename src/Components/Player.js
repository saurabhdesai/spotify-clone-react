import React from "react";
import "../Css/player.css";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
