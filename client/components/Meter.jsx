import React, { useState, useEffect } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import spotifyApi from '../apis/spotify'
function Meter(props) {

  const [rating , setRating] = useState(0)

  useEffect(() => {
    spotifyApi.getTopArtists()
    .then(topArtists => {
      const tempArr = []
      topArtists.items.forEach(item => {
        tempArr.push(item.popularity)
      })
      setRating(getRating(tempArr))
    })
  }, [])

  const getRating = (ratings) => {
    var total = 0
    ratings.forEach(rating => {
      total+=rating
    })
    return(Math.round(total/20))
  }

  return (
    <div>
      <h1>{100-rating}% Certified Hipster</h1>
      <h3>Your music taste is pretty basic</h3>
      <ReactSpeedometer
        value={rating}
        maxSegmentLabels={0}
        segments={1000}
        needleTransition='easeExpInOut'
        needleTransitionDuration={3000}
        maxValue={100}
      />
    </div>
  )
}

export default Meter
