import React from "react";

function Meme(props) {
  return (
    <div>
      <div className="meme">
        <div className="input-text">
          <h1 className="upper-text">{props.upperText}</h1>
          <h1 className="bottom-text">{props.bottomText}</h1>
        </div>
        <div className="meme-img">
          <img
            className=""
            src={props.randomImg}
            alt=""
            width="500px"
            height="400px"
          />
        </div>
      </div>
      <button onClick={props.genMeme}>RANDOM</button>
    </div>
  );
}

export default Meme;
