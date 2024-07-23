import React from "react";
import { Link } from "react-router-dom";
import './BottomBar.css';

export const BottomBar = () => {
    return(
        <div className="bottom-bar-container">
            <Link to="/"><i class="fa-solid fa-house bottom-custom"></i></Link>
            <i class="fa-solid fa-magnifying-glass bottom-custom"></i>
            <Link to="/LoginPage"><i class="fa-solid fa-user bottom-custom"></i></Link>

        </div>
    )
    
}
export default BottomBar;