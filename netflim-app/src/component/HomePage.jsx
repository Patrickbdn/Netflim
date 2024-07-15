import React from "react";
import './HomePage.css';
import MovieList from "./MovieList";

export const HomePage =() => {
  
  return(
    <>
    <div className="Hero">
      <h1>NETFLIM</h1>
      <span></span>
      <div className="cover-bg-img"></div>
      <div className="bg-img"></div>
      <p>Des milliers de films, de séries et documentaires accessibles depuis partout ! Et tout ça sans vous faire voler par Netflix</p>
    </div>
    <MovieList/>
    </>
  );
};

export default HomePage;