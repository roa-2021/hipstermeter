import React from 'react'
import {getLoginUrl} from '../apis/spotify';


function AuthButton () {
  return (
    <div>
      <a className="spotify-button" href={getLoginUrl()}>
        Connect Spotify
      </a>
    </div>
  )
}

export default AuthButton