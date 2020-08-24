import React from "react";

function Input(props) {
  return (
    <div className="input">
      <div className="input-order">
        <p>Top Text:</p>
        <input
          type="text"
          name="upperText"
          value={props.upperText}
          onChange={props.updateText}
        />
      </div>
      <div className="input-order">
        <p>Bottom Text:</p>
        <input
          type="text"
          name="bottomText"
          value={props.bottomText}
          onChange={props.updateText}
        />
      </div>
    </div>
  );
}

export default Input;
