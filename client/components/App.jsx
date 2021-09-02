import React from "react";

import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import List from "./List";
import UploadScoreForm from "./UploadScoreForm";
import Compare from "./Compare";
import Music from "./Music";
import Meter from "./Meter"
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
        <Route exact path="/about" component={About} />
        <Route exact path="/top-artists" component={List} />
        <Route exact path="/top-tracks" component={List} />
        <Route exact path="/uploadScoreForm" component={UploadScoreForm} />
        <Route exact path="/compare" component={Compare} />
      </div>
    </>
  );
};

export default withRouter(App);
