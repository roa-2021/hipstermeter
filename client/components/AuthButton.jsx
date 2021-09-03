import React from 'react'
import spotifyApi from '../apis/spotify';
import { Link } from "react-router-dom";


function AuthButton () {
  //Get Access token from URL when/if auth returns in params
  const accessToken = spotifyApi.getAccessToken();

  if (accessToken) {
    return (
      <div>
        <Link className="spotify-button authed" to="/top-artists">
          Ok, Let's find out!
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <a className="spotify-button" href={spotifyApi.getLoginUrl()}>
          Connect Spotify
        </a>
      </div>
    );
  }
}

export default AuthButton