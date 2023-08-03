import React, { useState } from "react";

export default function Textforms(props) {
  const handleUpClick = () => {
    console.log("button is clicked" + text);
    setText(text.toUpperCase());
  };
  const lowercase = () => {
    setText(text.toLowerCase());
  };
  const clear = () => {
    setText("");
  };
  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showalert("copied to clipboard", " successfully");
  };
  const handleOnChange = (event) => {
    console.log("is clicked");
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="container align-center">
          <h1>{props.heading}</h1>
          <textarea
            name="mybox"
            id="mybox"
            rows="8"
            onChange={handleOnChange}
            className={`form-control bg-${
              props.mode === "light" ? "light" : "secondary"
            }`}
            value={text}
            placeholder="Enter your text here"
          ></textarea>

          <button
            disabled={text.length === 0}
            className="btn btn-primary m-3 "
            onClick={handleUpClick}
          >
            convert to uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary m-3"
            onClick={lowercase}
          >
            convert to lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary m-3"
            onClick={clear}
          >
            clear
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary m-3"
            onClick={copy}
          >
            copy
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary m-3"
            onClick={handleExtraSpace}
          >
            remove extra space
          </button>
        </div>
      </div>
      <div className="container">
        <h3>Your Text Summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} character
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
