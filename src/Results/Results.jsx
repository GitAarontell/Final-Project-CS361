import React from "react";
import Image from "./Image.jsx";
import { Link } from "react-router-dom";
import "./resultsStyles.css";

// results loops through array returned when request is sent to server
// displays each image with the image component
// displays a back button that links back to home page
function Results({ obj }) {
  return (
    <div className='mainResultsContainer'>
      <div className="resultsContainer">
        {obj.map((obj, i) => {
          return <Image image={obj.pic} price={obj.price} name={obj.name} key={i}></Image>;
        })}
      </div>
      <div className="back">
        <Link to="/">
          <button className="back">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Results;
