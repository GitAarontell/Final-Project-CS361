import React, { useState } from "react";
import Title from "./Title/Title.jsx";
import Results from "./Results/Results.jsx";
import Choices from "./Choices/Choices.jsx";
import {Route, useHistory } from "react-router-dom";
import "./App.css";

function App() {
  let [sendData, setData] = useState({
    data: "",
  });
  let [modes, setModes] = useState(false);
  let [images, setImages] = useState([
    {
      pic: "https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg",
      price: 0,
    },
    {
      pic: "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg",
      price: 0,
    },
    {
      pic: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/10/foodJointPainRelief-142336977-770x533-1.jpg",
      price: 0,
    },
    {
      pic: "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
      price: 0,
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgv_7WcHGDMSb2j_ZbjdqXWr9s0UEumDMag&usqp=CAU",
      price: 0,
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8TZ68TjvbXpv9rPwicqCPiilW5M9tTfrMQ&usqp=CAU",
      price: 0,
    },
  ]);

  const history = useHistory();

  let handleClick = () => {
    if (modes) {
      setModes(false);
    } else {
      setModes(true);
    }
  };

  let changeMood = (mood) => {
    setData({
      data: mood,
    });
  };

  let handleSubmit = async () => {
    console.log("running");
    const response = await fetch("/info", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setImages(data);
    history.push("/results");
  };

  return (
    <div className="App">
      <Title></Title>
      <div className="center">
        <Route path="/" exact>
          <Choices
            submit={handleSubmit}
            click={handleClick}
            changeMood={changeMood}
          ></Choices>
        </Route>

        <Route path="/results">
          <Results obj={images} ></Results>
        </Route>
      </div>
    </div>
  );
}

export default App;

