import React from "react";
import './HomePage.css';
import MovieList from "./MovieList";

//Component uniquement pour gérer la homepage//
export const HomePage =() => {
  
//On retourne une div Hero, dans laquelle on retrouve 
//Le titre, l'image, le sous-titre et la liste des films//
  return(
    <>
    <div className="Hero">
      <h1>NETFLIM</h1>
      <span></span>
      <div className="cover-bg-img"></div>
      <video className="bg-img" autoPlay loop muted>
      <source src="/oppenheimer_trailer.mp4" type="video/mp4"></source>
      </video>
    </div>
    <MovieList/>
    </>
  );
};

export default HomePage;