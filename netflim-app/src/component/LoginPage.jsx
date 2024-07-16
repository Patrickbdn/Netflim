import React from "react";
import "./LoginPage.css";

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
        <button>Connexion</button></div> 

        </div>
    );

};

export default LoginPage;
