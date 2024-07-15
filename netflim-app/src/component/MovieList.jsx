import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './MovieList.css';

//Déclare les const pour l'api

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '0ea6622414dacb5eff8f08858f745c6e'; // Remplacez par votre clé API
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
//Use effect pour utiliser fetch et appaler l'api 

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=1`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des films populaires:', error);
      });
  }, []);

//Retourne une list des films les plus populaires

  return (
    <div className='content'>
      <h2>Les plus populaires</h2>
      <div className='film-container'>
        {movies.map(movie => (
          <div key={movie.id} className='poster-container'>
            <Link to ="/MovieDetaillsPage">
              <img src={`${baseImageUrl}${movie.poster_path}`} alt={movie.title}/>
            </Link>

          </div>
        ))};
      </div>

    </div>
  );
};

export default MovieList;
