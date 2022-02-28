import React from 'react';
import { Link } from "react-router-dom";
import './titleStyles.css';

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