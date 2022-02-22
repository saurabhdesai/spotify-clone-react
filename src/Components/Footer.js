import React from "react";
import "../Css/footer.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import VolumeUp from "@mui/icons-material/VolumeUp";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { useDatalayercontext } from "../Context/Datalayer";

function Footer() {
  const [{ discover_weekly }, dispatch] = useDatalayercontext();
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          src={discover_weekly?.images[0].url}
          className="footer_albumlogo"
        />
        <div className="footer_songinfo">
          <h4>Speed Up</h4>
          <p>New geners</p>
        </div>
      </div>
      <div className="footer_middle">
        <ShuffleIcon className="footer_green" />
        <SkipPreviousIcon className="footer_icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
        <SkipNextIcon className="footer_green" />
        <RepeatIcon className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeUp />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
