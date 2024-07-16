import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const apiKey = '0ea6622414dacb5eff8f08858f745c6e';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des détails du film:', error);
      });
  }, [id, apiKey]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-wrapper' >
      <div className="left-container">
        <img src={`${baseImageUrl}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="right-container">
        <div className="movie-info-container">
          <h1>{movie.title}</h1>
          <p>Date de sortie : {movie.release_date}</p>
          <p>Note : {movie.vote_average}</p>
  
          
        </div>
        <div className="movie-synopsis">
          <p>Synopsis : </p>
          <p className="paragraph-syno">{movie.overview}</p>
        </div>
        
      </div>
      <div className="background-img-movie">
      <img src={`${baseImageUrl}${movie.backdrop_path}`} alt={movie.title} />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
