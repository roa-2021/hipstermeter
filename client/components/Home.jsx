import React from 'react'
//import { Route } from 'react-router-dom'

import spotifyApi from '../apis/spotify';

function Home () {


  return (
    <div>
      <h2>Home</h2>
      <a className="spotify-button" href={spotifyApi.getLoginUrl()}>
        Connect Spotify
      </a>
    </div>
  );
}

export default Home