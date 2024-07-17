// src/Sidebar.js
import React from 'react';
import './SideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>

        <li><a href="#Compte">Compte</a></li>
        <li><a href="#Réglage du profil">Réglage du profil</a></li>
        <li><a href="#Favoris">Favoris</a></li>
        <li><a href="#En attente">En attente</a></li>
        <li><a href="#Paramètres">Paramètres</a></li>
        <li><a href="#Modifier informations">Modifier informations</a></li>
        <li><a href="#Se déconnecter">Se déconnecter</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
