import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [director, setDirector] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [trailers, setTrailers] = useState([]);
  const apiKey = '0ea6622414dacb5eff8f08858f745c6e';
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      setMovie(data);
      console.log('Movie data:', data);
      checkIfFavorite(data.id);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des détails du film:', error);
    });

    // Fetch movie credits (cast)
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      setCast(data.cast);
      const director = data.crew.find(member => member.job === 'Director');
      setDirector(director ? director.name : 'Unknown');
      console.log('Cast data:', data);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération du cast du film:', error);
    });

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=fr-FR`)
    .then(response => response.json())
    .then(trailersData => {
      const trailersList = trailersData.results.filter(video => video.type === 'Trailer' && video.site === 'YouTube');
      setTrailers(trailersList);
      console.log('Video data :', trailersData);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des trailers du film:', error);
    });
  }, [id, apiKey]);

  const checkIfFavorite = (movieId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFav = favorites.some(favMovie => favMovie.id === movieId);
    setIsFavorite(isFav);
  };

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const dialog = document.querySelector("dialog");

    if (isFavorite) {
      const newFavorites = favorites.filter(favMovie => favMovie.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      setIsFavorite(false);
    } else {
      dialog.showModal();
      requestAnimationFrame(() => {
        dialog.classList.add('show');
      });

      // Fermer automatiquement le dialog après 1.5 secondes (1500 millisecondes)
      setTimeout(() => {
        dialog.classList.remove('show'); // Retire la classe pour l'animation de fermeture
        setTimeout(() => dialog.close(), 500); // Attend la fin de l'animation avant de fermer
      }, 1500);

      favorites.push({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        release_date: movie.release_date
      });
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='movie-wrapper'>
      <div className="left-container">
        <img src={`${baseImageUrl}${movie.poster_path}`} alt={movie.title} />
        <button id="fav-star-button" onClick={handleFavoriteClick}>
          <i id="fav-star" className="fa-solid fa-star custom-star" style={{ color: isFavorite ? 'yellow' : '' }}></i>
        </button>
        <dialog id="add-fav-dialog">
          <p><strong>{movie.title}<br/></strong> a été ajouté à vos favoris !</p>
        </dialog>
      </div>
      <div className="right-container">
        <div className="movie-info-container">
          <h1>{movie.title}</h1>
          <p className='movie-director'>{director}</p>
          <p> {movie.release_date}, {movie.genres.map(genre => genre.name).join(' / ')}</p>
          <p>Note : {movie.vote_average}</p>

          {cast.length > 0 ? (
            <ul className='movie-actor-list'>
              {cast.slice(0, 5).map(actor => (
                <li key={actor.cast_id} className='movie-actor'>
                  {actor.profile_path ? (
                    <img
                      src={`${baseImageUrl}${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <div className="no-movie-actor" />
                  )}
                  {actor.name}, {actor.character}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucun cast disponible.</p>
          )}
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
