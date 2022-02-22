import React from "react";
import "../Css/body.css";
import Header from "./Header";
import { useDatalayercontext } from "../Context/Datalayer";
import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import Songrow from "./Songrow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDatalayercontext();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infotext">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p> {discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilled className="body_playbutton" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <Songrow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
