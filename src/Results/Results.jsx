import React from 'react';
import Image from './Image.jsx';
import './resultsStyles.css';

function Results({submit, images}) {
 return(
     <div className='resultsContainer'>

         {
             images.map((pic) => {
                 return <Image image={pic}></Image>
             })
         }

         <button className='back' onClick={submit}>Back</button>
     </div>
 );   
}

export default Results;