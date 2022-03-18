import React from "react";
import "./colorStyles.css";

// componenet displays color selection on mode change
// each div has onclick which changes parent state mood and expand
// mode button which changes parent state mode
// and has a results button, which requests information from the server
function ColorDisplay({ submit, changeMood, expand, click}) {
  return (
    <div className="choicesContainer">
      <div className="internalContainer">
        <div id='1' onClick={(e) =>changeMood("Happy", e)} className={`moods first ${expand[0]}`}></div>

        <div id='2' onClick={(e) =>changeMood("Angry", e)} className={`moods second ${expand[1]}`}></div>

        <div id='3' onClick={(e) =>changeMood("Confused", e)} className={`moods third ${expand[2]}`}></div>

        <div id='4' onClick={(e) =>changeMood("Disconnected", e)} className={`moods fourth ${expand[3]}`}></div>

        <div id='5' onClick={(e) =>changeMood("Sad", e)} className={`moods fifth ${expand[4]}`}></div>

        <div id='6' onClick={(e) =>changeMood("Scared", e)} className={`moods sixth ${expand[5]}`}></div>

        <div id='7' onClick={(e) =>changeMood("Nervous", e)} className={`moods seventh ${expand[6]}`}></div>

        <div id='8' onClick={(e) =>changeMood("Bored", e)} className={`moods eighth ${expand[7]}`}></div>
      </div>

      <div className="buttonContainer">
        <button className='results' onClick={submit}> Get Results </button>
        <button className="mode" onClick={click}>Mode</button>
      </div>
    </div>
  );
}

export default ColorDisplay;