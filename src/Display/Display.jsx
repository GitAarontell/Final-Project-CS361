import React from "react";
import Choices from '../Choices/Choices.jsx';
import ColorDisplay from "../ColorDisplay/ColorDisplay.jsx";

// this component renders things conditionally, based on mode's value
// if true then it renders ColorDisplay componenent which shows colors as choices
// if false, then it renders choices which only shows words
function Display ({mode, submit, changeMood, expand, click}) {

    if (mode) {
        return <ColorDisplay submit={submit} changeMood={changeMood} expand={expand} click={click}></ColorDisplay>
    } else {
        return <Choices submit={submit} changeMood={changeMood} expand={expand} click={click}></Choices>
    }
}

export default Display;