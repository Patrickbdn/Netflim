import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  return( 
    <nav>
      <ul>
        <li>
          <Link to ="/">Films</Link>
        </li>
        <li>Séries</li>
        <li>Animations</li>
        <li>Documentaires</li>
      </ul>
      <div className="right-nav">
        <input type="search" placeholder="Rechercher..."></input>
        <i className="fa-solid fa-magnifying-glass custom"></i>
        <Link to ="/LoginPage" ><i className="fa-solid fa-user custom"></i></Link>
      </div>
    </nav>
  );

};

export default NavBar;