import React from "react";

import Home from "./Home";
import Nav from "./Nav";
import Music from "./Music";
import { Route, withRouter } from "react-router-dom";

import spotifyApi from "../apis/spotify";

const App = ({ history }) => {

  // Change background color on route change
  history.listen((location, action) => {
    window.changeBg();
  });

  //Get Access token from URL when/if auth returns in params
  spotifyApi.getAccessToken();

  return (
    <>
      <h3>
        Access Token:
        <br />
        <kbd style={{ userSelect: "all" }}>{spotifyApi.getAccessToken()}</kbd>
      </h3>
      <Route path="/" component={Nav} />
      <div className="page">
        <Route exact path="/" component={Home} />
        <Route exact path="/music" component={Music} />
      </div>
    </>
  );
};

export default withRouter(App);
