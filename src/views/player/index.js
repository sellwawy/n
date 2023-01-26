import React, { useEffect, useState, createRef } from "react";
import ReactPlayer from "react-player";
import "./player.css";
import mute from "../../assets/img/mute.png";
import play from "../../assets/img/play.png";
import pause from "../../assets/img/pause.png";
import logo from "../../assets/img/movie.png";
import volume from "../../assets/img/volume.png";
import full from "../../assets/img/full.png";
import { Link } from "react-router-dom";

const Player = () => {
  const [plays, setPlay] = useState(false);
  const [playedSec, setPlayedSec] = useState(0);
  const [totalMin, setTotalMin] = useState(0);
  const [totalSec, setTotalSec] = useState(0);
  const [totalsec, settotalSec] = useState(0);
  const [volumes, setVolume] = useState(100);
  let createsRef = createRef();
  const handlePlay = () => {
    setPlay(true);
  };
  const handlePause = () => {
    setPlay(false);
  };
  const handleProgress = e => {
    setPlayedSec(e.playedSeconds);
  };
  const totalDuration = e => {
    settotalSec(e);
    setTotalMin(e / 60);
    setTotalSec(e % 60);
  };
  const setmuted = e => {
    setVolume(e);
  };
  const handleVolumeChange = e => {
    setVolume(e.target.value);
  };
  const onClickFullscreen = () => {
    var element = document.querySelector("#react-player");
    element.requestFullscreen();
  };

  return (
    <>
      <div className="Header">
        <div
          className="controlsContainer"
          style={{ backgroundColor: "#132544", marginTop: "0%" }}
        >
          <Link to="/">
            <img src={logo} alt="logo" style={{ marginLeft: "45%" }} />
          </Link>
        </div>
      </div>
      <div
        id="players"
        className="player-wrapper"
        style={{
          height: "100%",
          width: "100%",
          minHeight: "225px",
          marginTop: "1%"
        }}
      >
        <ReactPlayer
          className="react-player"
          id="react-player"
          url="https://www.youtube.com/watch?v=JwuIPC-Swk0"
          width="80%"
          volume={volumes / 100}
          playing={plays}
          onDuration={e => totalDuration(e)}
          onProgress={e => handleProgress(e)}
          onPlay={handlePlay}
          onPause={handlePause}
          onContextMenu={e => e.preventDefault()}
          config={{ file: { attributes: { controlsList: "nodownload" } } }}
          height="100%"
        />
      </div>
      <div
        className="controlsContainer"
        style={{ backgroundColor: "#132544", marginTop: "16%" }}
      >
        <div className="row">
          <div className="col-md-1 col-sm-2 col-lg-1 col-2">
            {!plays ? (
              <img
                className="controlsIcon--small"
                style={{
                  cursor: "pointer",
                  marginTop: "5%",
                  width: "50%",
                  marginLeft: "10%"
                }}
                alt=""
                src={play}
                onClick={() => setPlay(true)}
              />
            ) : (
              <img
                className="controlsIcon--small"
                style={{
                  cursor: "pointer",
                  marginTop: "5%",
                  width: "50%",
                  marginLeft: "10%"
                }}
                alt=""
                src={pause}
                onClick={() => setPlay(false)}
              />
            )}
          </div>
          <div
            className="col-md-7 col-sm-5 col-lg-7 col-7"
            style={{ marginTop: "1%", marginLeft: "-3%" }}
          >
            <input
              className="seek-range"
              type="range"
              min={0}
              max={totalsec}
              value={playedSec}
            />
            <h6 style={{ float: "right", fontSize: "14px" }}>
              {totalMin.toFixed(0)}min:{totalSec.toFixed(0)}sec
            </h6>
          </div>
          <div className="col-md-2 col-lg-2 col-lg-2 col-2">
            {volumes !== 0 ? (
              <img
                className="controlsIcon"
                style={{
                  cursor: "pointer",
                  marginTop: "5%",
                  width: "15%",
                  marginLeft: "-2%"
                }}
                alt=""
                src={volume}
                onClick={() => setmuted(0)}
              />
            ) : (
              <img
                className="controlsIcon"
                style={{
                  cursor: "pointer",
                  marginTop: "5%",
                  width: "15%",
                  marginLeft: "-2%"
                }}
                alt=""
                src={mute}
                onClick={() => setmuted(50)}
              />
            )}
            <input
              className="seek-range1"
              type="range"
              min={0}
              onInput={e => handleVolumeChange(e)}
              max={100}
              value={volumes}
            />
          </div>
          <div className="col-md-1 col-sm-1 col-lg-1 col-1">
            <img
              className="controlsIcon"
              style={{
                cursor: "pointer",
                marginTop: "13%",
                width: "40%",
                marginLeft: "150%"
              }}
              alt=""
              src={full}
              onClick={() => onClickFullscreen()}
            />
          </div>
        </div>
      </div>
      <hr style={{ marginLeft: "2%", marginRight: "2%", marginTop: "1%" }} />
      <div className="controlsContainer" style={{ marginTop: "1%" }}>
        <p style={{ marginLeft: "42%" }}>
          Media and Entertainment Rights @2022{" "}
        </p>
      </div>
    </>
    // </div>
  );
};

export default Player;
