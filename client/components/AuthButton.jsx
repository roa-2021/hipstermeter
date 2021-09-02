import React from 'react'
import spotifyApi from '../apis/spotify';


function AuthButton () {
  return (
    <div>
      <a className="spotify-button" href={spotifyApi.getLoginUrl()}>
        Connect Spotify
      </a>
    </div>
  )
}

export default AuthButton