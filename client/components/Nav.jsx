import React from 'react'
import List from "./List";
import UploadScoreForm from "./UploadScoreForm";
import Compare from "./Compare";

import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";


function Nav () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route exact path="/top-artists" component={List} />
      <Route exact path="/top-tracks" component={List} />
      <Route exact path="/uploadScoreForm" component={UploadScoreForm} />
      <Route exact path="/compare" component={Compare} />
    </nav>
  )
}

export default Nav