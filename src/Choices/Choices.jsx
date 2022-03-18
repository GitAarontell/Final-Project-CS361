import React from "react";
import "./choicesStyles.css";

// componenet displays word selection on mode change
// each div has onclick which changes parent state mood and expand
// mode button which changes parent state mode
// and has a results button, which requests information from the server
function Choices({ submit, changeMood, expand, click }) {

  return (
    <div className="choicesContainer">
      <div className="internalContainer">
        <div id='1' onClick={(e) =>changeMood("Happy", e)} className={`moodChoice ${expand[0]}`}>Happy</div>

        <div id='2' onClick={(e) =>changeMood("Angry", e)} className={`moodChoice ${expand[1]}`}>Angry</div>

        <div id='3' onClick={(e) =>changeMood("Confused", e)} className={`moodChoice ${expand[2]}`}>Confused</div>

        <div id='4' onClick={(e) =>changeMood("Disconnected", e)} className={`moodChoice ${expand[3]}`}>Disconnected</div>

        <div id='5' onClick={(e) =>changeMood("Sad", e)} className={`moodChoice ${expand[4]}`}>Sad</div>

        <div id='6' onClick={(e) =>changeMood("Scared", e)} className={`moodChoice ${expand[5]}`}>Scared</div>

        <div id='7' onClick={(e) =>changeMood("Nervous", e)} className={`moodChoice ${expand[6]}`}>Nervous</div>

        <div id='8' onClick={(e) =>changeMood("Bored", e)} className={`moodChoice ${expand[7]}`}>Bored</div>
      </div>
      <div className="buttonContainer">

        <button className="results" onClick={submit}> Get Results </button>
        <button className="mode" onClick={click}>Mode</button>
        
      </div>
    </div>
  );
}

export default Choices;
