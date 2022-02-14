import React from 'react';
import Image from './Image.jsx';
import './resultsStyles.css';

function Results({submit, images}) {
 return(
     <div className='resultsContainer'>

         {
             images.map((pic, i) => {
                 return <Image image={pic} key={i}></Image>
             })
         }

         <button className='back' onClick={submit}>Back</button>
     </div>
 );   
}

export default Results;