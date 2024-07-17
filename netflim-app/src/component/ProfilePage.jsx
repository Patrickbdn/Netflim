import React, { useState } from 'react';
import './ProfilePage.css';
import './LoginPage.css';
import imageprofile from '../asset/Profile-pic.jpeg';
import './SideBar.css';
import Sidebar from './SideBar.jsx';

const ProfilePage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="Profilcontainer">
<Sidebar/>

    <div className="logincontainer">
    
      <h1>Pseudo</h1>
      <div className="Favoris">
      
      <h3>Email</h3>
      <div className="loginpage">
        
      </div>
      </div>
      <div className="email"></div>
      {/* Utilisation de ProfilePicture comme composant  */}
      <img className="imageprofile" src={imageprofile} alt="profil" /> 

      <div className="Favoris">
        <h3>Films mis en favoris</h3>
        <div className="mignaturesfilmscontainer">
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
    </div>;
      </div>
      <div className="Favoris">
        <h3>Films mis en attente</h3>
    <div className="mignaturesfilmscontainer">
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
      <div className="mignaturesfilms"></div>
    </div>;
    </div>
    </div>
    </div>
  );
  

};




export default ProfilePage;
