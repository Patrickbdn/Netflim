import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

import Sidebar from './SideBar.jsx';

export const LoginPage = () => {
    return(
        <div className="logincontainer">
         
            <h1>Login Page</h1>
            <div className="loginpage">
            
                <p>Connexion</p>
                <p>|</p>
                <p>Création de compte</p>
                
        </div> 
        <div className="logininfo"> <input type="email" placeholder="Votre email"/>
        <input type="Password" placeholder="Passwword"/> 
        <Link to="/ProfilePage"><a href="#" class="myButton">
        <button>Connexion</button></a></Link></div>

        </div>
    );

};

export default LoginPage;
