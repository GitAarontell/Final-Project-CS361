import React, { useState } from "react";
import Title from "./Title/Title.jsx";
import Display from "./Display/Display.jsx";
import "./App.css";

function App() {
  let [home, setHome] = useState(false);
  let [images, setImages] = useState([
    "https://c.ndtvimg.com/2020-05/9iuj3h1g_indian-food_625x300_19_May_20.jpg",
    "https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg",
    "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2016/10/foodJointPainRelief-142336977-770x533-1.jpg",
    "https://www.ingredion.com/content/dam/ingredion/usca-images/food/meat/cheeseburger-bread_720x560.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYgv_7WcHGDMSb2j_ZbjdqXWr9s0UEumDMag&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8TZ68TjvbXpv9rPwicqCPiilW5M9tTfrMQ&usqp=CAU"
  ]);

  let handleSubmit = () => {
    if (home) {
      setHome(false);
    } else {
      setHome(true);
    }
  };

  return (
    <div className="App">
      <Title></Title>
      <div className='center'>
        <Display submit={handleSubmit} result={home} images={images}></Display>
      </div>

      <button className='mode'>Mode</button>
    </div>
  );
}

export default App;
