// import required libraries, componenets, and styles
import React, { useState } from "react";
import Title from "./Title/Title.jsx";
import Results from "./Results/Results.jsx";
import Display from "./Display/Display.jsx";
import { Route, useHistory } from "react-router-dom";
import "./App.css";

// main components that imports other components and holds state that is passed down to
// child components
function App() {
  // data state, sets mood data to be sent to server microservice
  let [sendData, setData] = useState({
    data: "",
  });
  // mode state, sets whether words or colors will be displayed
  let [modes, setModes] = useState(false);
  // expand state, sets which selection will be scaled up when the user clicks on a choice
  let [expand, setExpand] = useState(["", "", "", "", "", "", "", ""]);
  // images state, used to hold data sent back by the server into an array with images and other information
  let [images, setImages] = useState([]);

  // used with react router to make react go back to a certain path, like changing a page
  const history = useHistory();

  // handles when mode button is clicked and changes state based on what it was previously
  let handleClick = () => {
    if (modes) {
      setModes(false);
    } else {
      setModes(true);
    }
  };

  // sets up the expand state so that the buttons will have the class on when they are clicked,
  // then when another one is clicked, it will turn take off that class from the previous one and
  // add it to the new one
  let setExpandState = (num) => {
    if (num === "1") {
      setExpand(["on", "", "", "", "", "", "", ""]);
    } else if (num === "2") {
      setExpand(["", "on", "", "", "", "", "", ""]);
    } else if (num === "3") {
      setExpand(["", "", "on", "", "", "", "", ""]);
    } else if (num === "4") {
      setExpand(["", "", "", "on", "", "", "", ""]);
    } else if (num === "5") {
      setExpand(["", "", "", "", "on", "", "", ""]);
    } else if (num === "6") {
      setExpand(["", "", "", "", "", "on", "", ""]);
    } else if (num === "7") {
      setExpand(["", "", "", "", "", "", "on", ""]);
    } else if (num === "8") {
      setExpand(["", "", "", "", "", "", "", "on"]);
    }
  };
  // when a choice is clicked, data is set to the mood passed in
  // and set expand is called which keeps the scaling on the selection
  // so there is a response to clicking on the choice
  let changeMood = (mood, e) => {
    setExpandState(e.target.id);
    setData({
      data: mood,
    });
  };

  // sends a request to microservice server, sets server response to data,
  // then updates state images with that data, and changes page to show results
  let handleSubmit = async () => {
    // if there has been a selection
    if (sendData.data !== "") {
      // sets up data to send and awaits response
      const response = await fetch("/info", {
        method: "POST",
        body: JSON.stringify(sendData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // puts response into data
      const data = await response.json();
      // sets images array state to data
      setImages(data);
      // goes to results path
      history.push("/results");
    // if there has been no selection
    } else { 
      // alerts user to what he should do
      alert(
        "Choose a mood or color then click get results to get food recommendations!"
      );
    }
  };

  // main app loads title, display and results components and puts them on different paths
  return (
    <div className="App">
      <Title></Title>
      <div className="center">
        <Route path="/" exact>
          <Display
            mode={modes}
            submit={handleSubmit}
            changeMood={changeMood}
            expand={expand}
            click={handleClick}
          ></Display>
        </Route>

        <Route path="/results">
          <Results obj={images}></Results>
        </Route>
      </div>
    </div>
  );
}

export default App;
