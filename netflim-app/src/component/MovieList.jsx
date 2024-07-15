//import React from "react";
//import { MovieCard } from "./MovieCard";

//export const MovieList  =() => {
  //return(
    //<div>
      //<p>Films populaire</p>
      //<MovieCard/>
    //</div>
  //);
//};



import React, { useState, useEffect } from "react";
import { MovieCard } from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les films populaires
    const fetchPopularMovies = async () => {
      const apiKey = '0ea6622414dacb5eff8f08858f745c6e'; // Remplacez par votre clé API
      const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Erreur:', error);
      }
    };

    fetchPopularMovies();
  }, []); // Le tableau vide [] assure que useEffect s'exécute seulement après le premier rendu

  return (
    <div>
      <p>Films populaires</p>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} // URL de l'affiche du film
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
