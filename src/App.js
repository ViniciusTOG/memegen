import React from "react";
import "./App.css";
import Meme from "./Meme.js";
import Input from "./Input.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      upperText: "",
      bottomText: "",
      randomImg: "",
    };
    this.genMeme = this.genMeme.bind(this);
    this.updateText = this.updateText.bind(this);
  }

  //LIFECYCLE METHOD

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        const randomMemes = memes[Math.floor(Math.random() * memes.length)];
        this.setState({
          randomImg: randomMemes.url,
        });
      });
  }

  //METHODS

  genMeme() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        const randomMemes = memes[Math.floor(Math.random() * memes.length)];
        this.setState({
          randomImg: randomMemes.url,
        });
        console.log(this.state.randomImg);
      });
  }

  updateText(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  //MAIN APP
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Input
            upperText={this.state.upperText}
            bottomText={this.state.bottomText}
            updateText={this.updateText}
          />
          <Meme
            upperText={this.state.upperText}
            bottomText={this.state.bottomText}
            randomImg={this.state.randomImg}
            genMeme={this.genMeme}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
