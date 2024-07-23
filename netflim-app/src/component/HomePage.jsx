import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './HomePage.css';
import MovieList from "./MovieList";

export const HomePage = () => {
  const [movie, setMovie] = useState(null);
  const apiKey = '0ea6622414dacb5eff8f08858f745c6e'; // Remplacez par votre clé API
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=fr-FR&page=1`)
      .then(response => response.json())
      .then(data => {
        const latestMovie = data.results[0]; // On prend le premier film de la liste
        setMovie(latestMovie);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des films en cours de diffusion:', error);
      });
  }, []);

  return (
    <>
      <div className="Hero">
        <h2>Récent</h2>
        <div className="recent-film-container">
          {movie && (
            <div key={movie.id} className='recent-film-poster'>
              <Link to={`/MovieDetailsPage/${movie.id}`}>
                <img src={`${baseImageUrl}${movie.backdrop_path}`} alt={movie.title} className="recent-film-bkdrop" />
                <img src={`${baseImageUrl}${movie.poster_path}`} alt={movie.title} draggable="false" />
              </Link>
              <h2>{movie.title} </h2>
            </div>
          )}
        </div>
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
