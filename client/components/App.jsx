import React from 'react'

import  Home from './Home'
import  Nav from './Nav'
import Music from './Music'
import { Route } from 'react-router-dom'

import spotifyApi from '../apis/spotify';


const App = () => {
  return (
    <>
      <h1>Music Time</h1>
      <Route path ='/' component ={Nav}/>
      <Route exact path ='/' component ={Home}/>
      <Route exact path ='/music' component ={Music}/>

    </>
  )
}

export default App
