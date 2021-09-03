import React from 'react'
//import { Route } from 'react-router-dom'
import AuthButton from './AuthButton';

//import spotifyApi from '../apis/spotify';

function Home () {

  return (
    <>
      <div className="column-1">
        <h1>Hipster Meter</h1>
        <p className="tag-line">Find out if your music taste is aesthetic</p>
        <AuthButton />
      </div>
      <div className="column-2">
        <img className="greek-hipster" src="/images/greek-hipster.png"></img>
      </div>
    </>
  );
}

export default Home