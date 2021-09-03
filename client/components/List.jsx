import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spotifyApi from "../apis/spotify";
import Loading from "./Loading";

function List(props) {
  const [loading, setLoading] = useState(true);
  const [topName, setTopName] = useState("Artists");
  const [albums, setAlbums] = useState([]);
  const [topList, setTopList] = useState([]);

  useEffect(() => {
    const pageUrl = props.match.path;
    if (pageUrl.indexOf("artist") > -1) {
      setTopName("Artists");
      getArtists();
    } else {
      setTopName("Tracks");
      getTracks();
    }
  }, [props]);

  function getArtists() {
    spotifyApi.getTopArtists().then(({ items }) => getTopList(items));
  }

  function getTracks() {
    spotifyApi.getTopTracks().then(({ items }) => getTopList(items));
  }

  function getTopList(items) {
    items = items.slice(0, 5);
    const list = [];
    items.forEach((item) => list.push(item.name));
    setTopList(list);
    setLoading(false);
  }

  function nextButton() {
    if (topName == "Artists") {
      return (
        <Link className="list-next" to="/top-tracks">
          Nice!
        </Link>
      );
    } else {
      return (
        <Link className="list-next" to="/meter">
          Cool. How Hipster am I?
        </Link>
      );
    }
  }

  return (
    <>
      {loading && (
        <div className="column-1">
          <Loading />
        </div>
      )}
      {!loading && (
        <>
          <div className="column-1">
            <div>
              <h2>Your Top 5 {topName}</h2>
              {topList.map((item) => (
                <p className="top-five">{item}</p>
              ))}
              {nextButton()}
            </div>
          </div>
          <div className="column-2"></div>
        </>
      )}
    </>
  );
}

export default List;
