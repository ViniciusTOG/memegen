import React, { useState, useEffect } from "react";
import "./App.css";
import Meme from "./Meme.js";
import Input from "./Input.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  const [upperText, setUpperText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImg, setRandomImg] = useState("");

  // constructor() {
  //   super();
  //   this.state = {
  //     upperText: "",
  //     bottomText: "",
  //     randomImg: "",
  //   };
  //   this.genMeme = this.genMeme.bind(this);
  //   this.updateText = this.updateText.bind(this);
  // }

  //LIFECYCLE METHOD

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        const randomMemes = memes[Math.floor(Math.random() * memes.length)].url;
        console.log(randomMemes);
        setRandomImg(randomMemes);
      });
  }, []);

  //METHODS

  function genMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        const randomMemes = memes[Math.floor(Math.random() * memes.length)].url;
        setRandomImg(randomMemes);
      });
  }

  function updateUpperText(event) {
    setUpperText(event.target.value);
  }

  function updateBottomText(event) {
    setBottomText(event.target.value);
  }

  //MAIN APP
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Input
          upperText={upperText}
          bottomText={bottomText}
          updateUpperText={updateUpperText}
          updateBottomText={updateBottomText}
        />
        <Meme
          upperText={upperText}
          bottomText={bottomText}
          randomImg={randomImg}
          genMeme={genMeme}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
