import React, { useState, useEffect } from 'react';
import imageprofile from '../asset/Profile-pic.jpeg';
import Sidebar from './SideBar.jsx';
import { Link } from "react-router-dom";
import './ProfilePage.css';
import './SideBar.css';

const ProfilePage = () => {
    const [favorites, setFavorites] = useState([]);
  
    useEffect(() => {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavorites(storedFavorites);
    }, []);
  
  return (
    <div className='profil-page-wrapper'>
      <Sidebar className="side"/>
      <span className='sidebar-border'></span>
      <div className="Profilcontainer">
        <div className='profil-page-info'>
          <img src={imageprofile} alt="Profil"/>
          <div className='profil-page-pseudo-mail'>
            <p>Pseudo</p>
            <p>email@gmail.com</p>
          </div>
        </div>

      <div class="fav-container">
        <div>
          <h2>Mes films favoris</h2>
        </div>
        <div className='fav-movie-list'>
        {favorites.length === 0 ? (
          <p>Aucun film en favoris.</p>
        ) : (
          favorites.slice(0,5).map((movie) => (
            <div key={movie.id} className="favorite-movie">
              <Link to={`/MovieDetailsPage/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
              </Link>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
    </div>
  );
  

};




export default ProfilePage;
