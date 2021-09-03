import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getCreators } from '../apis/about'

const About = () => {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    refreshCreators()
  }, [])

  const refreshCreators = () => {
    getCreators()
      .then(creators => setCreators(creators))
  }

  return (
    <>
        {creators.map(aCreator => {
          return (
          <div className="creator" key={aCreator.id}>
              <a href={`https://github.com/${aCreator.githubAcc} target="_blank"`}><h2>{aCreator.name}</h2></a>
              <p>{`I think my favourite artist is: ${aCreator.myFave}.`}</p>
              <p>{`Spotify says my favourite artist is: ${aCreator.spotifyFave}.`}</p>

          </div>
          )
        })}
    </>
  )
}

export default About