import React from "react";
import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.css";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Watch = () => {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        src={movie.video}
        className="video"
        autoplay
        progress
        controls
      ></video>
    </div>
  );
};

export default Watch;
