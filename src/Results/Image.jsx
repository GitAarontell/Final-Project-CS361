import React from "react";
import "./resultsStyles.css";

// image is one image that takes an image address, a price and a name
function Image({ image, price, name }) {

  // each image displays an image from the linke address
  // when you hover over the image it displays the name
  // and price
  return (
    <div>
        <div className='cover'>
            <p>{name}</p>
            <p>{`Price: $${price}`}</p>
        </div>
      <img src={image} alt="" />
    </div>
  );
}

export default Image;
