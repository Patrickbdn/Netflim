import React from "react";
import './HomePage.css';
import MovieList from "./MovieList";

export const HomePage =() => {
  return(
    <>
    <div className="Hero">
      <h1>Netflim</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <MovieList/>
    </>
  );
};

export default HomePage;