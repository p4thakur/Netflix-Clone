import React, { useState, useEffect } from "react";
import axios from "./axios"; //no I used "export deafult instance" in file. it means its and alias name. I dn't havt use exact name
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //his is intillize as an array
  const [trailerUrl, setTrailerUrl] = useState(""); //this is initialize as string

  console.log(trailerUrl);

  //a snippet of code that run on a specifu condtion
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]); //if i ma using any varibale inside useEffect than I hav to add it here

  //these are option i fetched from npm youtibe libraray
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, //thi mean load once when page loads
    },
  };

  const handleClick = (movie) => {
    //if already a trailor is playin than close it
    console.log("prateek" + movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      //this is react function which take movie name and give its url from uyube
      movieTrailer(movie.name || "")
        .then((url) => {
          //I have url now, fetch video ifdrom it
          //https://www.youtube.com/watch?v=mqVrtv5dlRw

          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v")); //set trailer url to trialer id
        })
        .catch((error) => console.log(error));
    }
  };

  //   console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={
              movie.id
            } /**this avoid reloading same image gain and again. i cacan remove it oo*/
            onClick={() => handleClick(movie)}
            //decid class name.  if its a large row than also provide it  addition styling(row poster + anothe one)
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            //decinf which one to load poster or backdrop
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* if trailer url is present than play it */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
