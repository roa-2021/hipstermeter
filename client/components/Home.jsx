import React from 'react'
//import { Route } from 'react-router-dom'
import AuthButton from './AuthButton';

//import spotifyApi from '../apis/spotify';

function Home () {


  return (
    <div>
      <h2>Hipstermeter</h2>
      <p>Find out if your music taste is cool</p>
      <div>
        <AuthButton/>
        </div>
    </div>
  );
}

export default Home