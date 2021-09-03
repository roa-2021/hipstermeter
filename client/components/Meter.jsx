import React, { useState, useEffect } from "react"
import ReactSpeedometer from "react-d3-speedometer"
import spotifyApi from "../apis/spotify"
function Meter(props) {
  const [rating, setRating] = useState(0)
  const [topArtist, setTopArtist] = useState("")
  const random = Math.floor((Math.random()*9) + 1)
  var count = 0

  useEffect(() => {
    spotifyApi.getTopArtists().then((topArtists) => {
      const tempArr = []
      topArtists.items.forEach((item) => {
        tempArr.push(item.popularity)
        console.log(random)
        count++
        if(count == random){
          setTopArtist(item.name)
        }
      })
      setRating(getRating(tempArr))
    })
  }, [])

  const getRating = (ratings) => {
    var total = 0
    ratings.forEach((rating) => {
      total += rating
    })
    return Math.round(total / 20)
  }

  const getInsult = (rating) => {
    if (rating <= 10) {
      return topArtist + "? You have the musical taste of a wet celery"
    } else if (rating <= 20) {
      return "You'd be doing the world a favor by keeping your music taste to yourself. And yes that includes " + topArtist 
    } else if (rating <= 30) {
      return "You play " + topArtist + " to drown out the sound of your own ignorance."
    } else if (rating <= 40) {
      return topArtist + "? I like everything I've ever heard of more than this."
    } else if (rating <= 50) {
      return topArtist + "? Your music taste is the personification of whatever"
    } else if (rating <= 60) {
      return topArtist + "? I want you to love music but your taste in music seems to actively hate music."
    } else if (rating <= 70) {
      return "I've heard better music than " + topArtist + " coming out of a soda machine."
    } else if (rating <= 80) {
      return topArtist + " is the sound a dying whale makes."
    } else if (rating <= 90) {
      return "I'd probably like " + topArtist + ", if I was tone deaf."
    } else {
      return "I guess you're pretty hipster huh..."
    }
  }

  return (
    <div>
      <h1>{100 - rating}% Certified Hipster</h1>
      <h3>{getInsult(rating)}</h3>
      <ReactSpeedometer
        value={100 - rating}
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
