import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./Components/Login";
import { getTokenFromUrl } from "./Components/Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDatalayercontext } from "./Context/Datalayer";
import Player from "./Components/Player";
function App() {
  const spotify = new SpotifyWebApi();
  const [{ user, token }, dispatch] = useDatalayercontext();
  useEffect(() => {
    const hash = getTokenFromUrl();
    console.log("this is my token", hash);
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user", user.id);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      // spotify.getUserPlaylists(user.id)
      // console.log("user after token ste", user);
      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlist", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1DX9lvVZB0RKOh").then((response) => {
        console.log("response", response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  console.log("user", user);
  console.log("token", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
