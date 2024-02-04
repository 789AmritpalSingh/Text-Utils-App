import React, { useState } from "react";
import { shuffle } from "lodash";

export default function TextForm(props) {
  const [text, setText] = useState(""); // default text will be there in textarea field
  //text = "text here" // incorrect way of changing text

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value); // with this you can change text in text area field otherwise you can't
  };

  const copyToClipboard = async () => {
    try {
      let text = document.getElementById("myBox");
      text.select();
      await navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to clipboard", "success");
    } catch (error) {
      console.log(
        "Oops!, Text couldn't be copied to clipboard as an error named " +
          error +
          "occurred"
      );
    }
  };

  const shuffleText = () => { // will shuffle the words in the text
    const words = text.split(" ");
    const shuffledWords = shuffle(words);
    const newText = shuffledWords.join(" ");
    setText(newText);
    props.showAlert("Text has been shuffled", "success");
  };

  const convertToUpper = () => {
    // console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text has been successfully capitalized", "success");
  };

  const convertToLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(
      "Text has been successfully converted to lowercase characters",
      "success"
    );
  };

  const clearText = () => {
    let emptyText = "";
    setText(emptyText);
    props.showAlert("Text has been successfully cleared", "success");
  };

  const isTextEmpty = text.trim().length===0

  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control is-invalid"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            required
          ></textarea>
        </div>
        <button disabled={isTextEmpty} className="btn btn-primary mx-1 my-2" onClick={convertToUpper}>
          Convert To Uppercase
        </button>

        <button disabled={isTextEmpty} className="btn btn-primary mx-1 my-2" onClick={convertToLower}>
          Convert To Lowercase
        </button>

        <button disabled={isTextEmpty} className="btn btn-primary mx-1" onClick={shuffleText}>
          Shuffle Text
        </button>

        <button disabled={isTextEmpty} className="btn btn-primary mx-1" onClick={copyToClipboard}>
          Copy Text
        </button>

        <button disabled={isTextEmpty} className="btn btn-primary mx-1 my-2" onClick={clearText}>
          Clear Text
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
          <p>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s/g, '').length} characters
          </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        {/*will tell in how many minutes you can read that text */}
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </div>
  );
}
