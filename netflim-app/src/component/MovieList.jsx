import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import './MovieList.css';

//Fonction pour afficher la liste des films
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = '0ea6622414dacb5eff8f08858f745c6e'; // Remplacez par votre clé API
  const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

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

  // Fonctions pour le carousel (drag scroll)
  const slider = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(null);
  const scrollLeft = useRef(null);

  useEffect(() => {
    const sliderRef = slider.current;

    const handleMouseDown = (e) => {
      isDown.current = true;
      startX.current = e.pageX - sliderRef.offsetLeft;
      scrollLeft.current = sliderRef.scrollLeft;
      e.preventDefault(); // Empêche le comportement par défaut
    };

    const handleMouseLeave = () => {
      isDown.current = false;
    };

    const handleMouseUp = () => {
      isDown.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault(); // Empêche le comportement par défaut
      const x = e.pageX - sliderRef.offsetLeft;
      const walk = x - startX.current;
      sliderRef.scrollLeft = scrollLeft.current - walk;
    };

    sliderRef.addEventListener("mousedown", handleMouseDown);
    sliderRef.addEventListener("mouseleave", handleMouseLeave);
    sliderRef.addEventListener("mouseup", handleMouseUp);
    sliderRef.addEventListener("mousemove", handleMouseMove);

    return () => {
      sliderRef.removeEventListener("mousedown", handleMouseDown);
      sliderRef.removeEventListener("mouseleave", handleMouseLeave);
      sliderRef.removeEventListener("mouseup", handleMouseUp);
      sliderRef.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className='content'>
      <h2>Les plus populaires</h2>
      <div className="film-container" ref={slider}>
        {movies.map(movie => (
          <div key={movie.id} className='poster-container'>
            <Link to={`/MovieDetaillsPage/${movie.id}`}>
            <img src={`${baseImageUrl}${movie.poster_path}`} alt={movie.title} draggable="false" />
            {/* <button>+</button> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;

