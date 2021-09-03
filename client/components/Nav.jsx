import React from 'react'
import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";


function Nav () {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/list">List</Link>
      <Link to="/uploadScoreForm">UploadScoreForm</Link>
      <Link to="/compare">Compare</Link>
      <Link to="/meter">Meter</Link>
    </nav>
  )
}

export default Nav