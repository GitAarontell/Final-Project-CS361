import React from "react";
import "./choicesStyles.css";

function Choices({submit}) {

  return (
    <div className="choicesContainer">

      <form className="form" action="" method="GET">

        <div className="internalContainer">
          <div className="moodChoice">
            <input type="radio" id="happy" name="mood" value="happy" />
            <label htmlFor="happy">Happy</label>
          </div>

          <div className="moodChoice">
            <input type="radio" id="angry" name="mood" value="angry" />
            <label htmlFor="angry">Angry</label>
          </div>

          <div className="moodChoice">
            <input type="radio" id="confused" name="mood" value="confused" />
            <label htmlFor="confused">Confused</label>
          </div>

          <div className="moodChoice">
            <input
              type="radio"
              id="disconnected"
              name="mood"
              value="disconnected"
            />
            <label htmlFor="disconnected">Disconnected</label>
          </div>

          <div className="moodChoice">
            <input type="radio" id="sad" name="mood" value="sad" />
            <label htmlFor="sad">Sad</label>
          </div>

          <div className="moodChoice">
            <input type="radio" id="scared" name="mood" value="scared" />
            <label htmlFor="scared">Scared</label>
          </div>

          <div className="moodChoice">
            <input type="radio" id="nervious" name="mood" value="nervious" />
            <label htmlFor="nervious">Nervious</label>
          </div>

          <div className="moodChoice">
            <input type="radio" id="bored" name="mood" value="bored" />
            <label htmlFor="bored">Bored</label>
          </div>
        </div>

        <button onClick={submit} type="submit"> Get Results </button>
      </form>
    </div>
  );
}

export default Choices;

/*
                {
                    moods.map((mood, i) => {
                        return <SingleChoice mood={mood} key={i}></SingleChoice>
                    })
                }
*/
