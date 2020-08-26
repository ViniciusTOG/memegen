import React from "react";

function Input(props) {
  return (
    <div className="input">
      <div className="input-order">
        <p>Top Text:</p>
        <input
          type="text"
          name="setUpperText"
          value={props.upperText}
          onChange={props.updateUpperText}
        />
      </div>
      <div className="input-order">
        <p>Bottom Text:</p>
        <input
          type="text"
          name="setBottomText"
          value={props.bottomText}
          onChange={props.updateBottomText}
        />
      </div>
    </div>
  );
}

export default Input;
