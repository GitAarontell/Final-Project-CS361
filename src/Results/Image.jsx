import React from "react";
import "./resultsStyles.css";

function Image({ image, price }) {
  console.log(price);
  return (
    <div>
        <div className='cover'>
            {`Price: $${price}`}
        </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Image;
