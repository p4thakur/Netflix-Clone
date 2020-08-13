import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      //now oic only obe of the movie randome to show on banner
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  /**if description gp beyond  500 word truncate it*/
  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        {/* title, rhan div with two bution than description  */}
        <h1 className="banner_title">
          {movie.title || movie.name || movie.original_name}{" "}
        </h1>

        <div clasName="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{movie.overview}</h1>
        {/**check this it is causing me eroor while calling function*/
        /* <h1 className="banner_description">{truncate(movie.overview, 150)}</h1> */}
      </div>
      {/* lets make a fade between my banner and roe componetn */}
      <div class="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
