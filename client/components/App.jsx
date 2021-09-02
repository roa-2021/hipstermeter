import React from 'react'

import  Home from './Home'
import  Nav from './Nav'
import Music from './Music'
import { Route } from 'react-router-dom'

import spotifyApi from '../apis/spotify';


const App = () => {
  return (
    <>
      <Route path ='/' component ={Nav}/>
      <div class="page">
        <Route exact path ='/' component ={Home}/>
        <Route exact path ='/music' component ={Music}/>
      </div>
    </>
  )
}

export default App
