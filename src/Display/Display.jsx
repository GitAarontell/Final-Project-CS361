import React from "react";
import Choices from '../Choices/Choices.jsx';
import Results from '../Results/Results.jsx';

function Display ({result, submit, images}) {
    const results = result;

    if (results) {
        return <Results submit={submit} images={images}></Results>
    } else {
        return <Choices submit={submit} ></Choices>
    }
}

export default Display;