import React from 'react'
//import { Route } from 'react-router-dom'
import AuthButton from './AuthButton';

//import spotifyApi from '../apis/spotify';

function Home () {


  return (
    <>
      <div className="column-1">
        <h1>Hipster Meter</h1>
        <p>Find out if your music taste is aesthetic</p>
        <AuthButton />
      </div>
      <div className="column-2"></div>
    </>
  );
}

export default Home