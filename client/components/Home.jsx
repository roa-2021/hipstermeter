import React from 'react'
//import { Route } from 'react-router-dom'
import AuthButton from './AuthButton';

//import spotifyApi from '../apis/spotify';

function Home () {


  return (
    <>
      <div className="column-1">
        <h1>Home</h1>
        <AuthButton/>
      </div>
      <div className="column-2">

      </div>
    </>
  );
}

export default Home