import React from 'react';
import { Link } from "react-router-dom";
import './titleStyles.css';

// displays the title on the app that can be clicked to go back to home page
function Title() {
    return(
        <div className="titleContainer">
            <Link style={{ textDecoration: 'none' }}to='/'>
            <p>Mood Food</p>
            </Link>
         </div>
    );
}

export default Title;