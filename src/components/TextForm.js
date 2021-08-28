import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Text has been cleared", "danger");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied", "info");
  };
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra spaces has been removed", "info");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id="my-box"
            rows="7"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1d1a1d",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpClick}
          className="btn btn-info mx-1 my-1"
        >
          UpperCase ⬆
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowClick}
          className="btn btn-info mx-1 my-1"
        >
          LowerCase ⬇
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-danger mx-1 my-1"
        >
          Clear ❌
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopyClick}
          className="btn btn-success mx-1 my-2"
        >
          Copy 📝
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpaceClick}
          className="btn btn-success mx-1"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words , {text.length} Characters , {text.split(".").length - 1}{" "}
          Sentence
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <p></p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
