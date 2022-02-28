import React from "react";

import "./choicesStyles.css";

function Choices({ submit, handleClick, changeMood }) {
  return (
    <div className="choicesContainer">
      <div className="internalContainer">
        <div onClick={() =>changeMood("Happy")} className="moodChoice">Happy</div>

        <div onClick={() =>changeMood("Angry")} className="moodChoice">Angry</div>

        <div onClick={() =>changeMood("Confused")} className="moodChoice">Confused</div>

        <div onClick={() =>changeMood("Disconnected")} className="moodChoice">Disconnected</div>

        <div onClick={() =>changeMood("Sad")} className="moodChoice">Sad</div>

        <div onClick={() =>changeMood("Scared")} className="moodChoice">Scared</div>

        <div onClick={() =>changeMood("Nervous")} className="moodChoice">Nervous</div>

        <div onClick={() =>changeMood("Bored")} className="moodChoice">Bored</div>
      </div>

      <button onClick={submit}> Get Results </button>

      <button className="mode" onClick={()=>handleClick}>
        Mode
      </button>
    </div>
  );
}

export default Choices;
