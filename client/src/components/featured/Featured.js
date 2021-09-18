import React, { useEffect, useState } from "react";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import "./featured.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/movies/random?type=${type}`,
          {
            headers: {
              token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
          }
        );

        setContent(res.data[0]);
        setMovie(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Action</option>
            <option value="adventure">Adventure</option>
            <option value="animation">Animation</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="documentary">Documentary</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />
      <div className="info">
        <span className="featuredTitle">{content.title}</span>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <Link to={{ pathname: "/watch", movie: movie }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>{" "}
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
