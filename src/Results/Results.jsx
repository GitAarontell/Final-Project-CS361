import React from "react";
import Image from "./Image.jsx";
import { Link } from "react-router-dom";
import "./resultsStyles.css";

function Results({ obj }) {
  return (
    <div className="resultsContainer">
      {obj.map((obj, i) => {
        return <Image image={obj.pic} price={obj.price} key={i}></Image>;
      })}
      <div className="back">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default Results;
