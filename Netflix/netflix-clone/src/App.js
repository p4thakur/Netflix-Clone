import React, { Component } from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Navigation from "./Nav";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/*Navigation adn Banner*/}
        <Navigation />
        <Banner />

        {/* making first row large.by default islargeRow same as islargerow=true */}
        <Row
          isLargeRow
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginal}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies} />
      </div>
    );
  }
}

export default App;
