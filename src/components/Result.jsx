import React from "react";
const Result = ({ result, selectedColor }) => {
  console.log("%c Result rendered! ", "background: blue; color: #fff");

  return (
    <div
      className="result-container"
      style={{ backgroundColor: selectedColor }}
    >
      <h1>{result}</h1>
    </div>
  );
};

export default Result;
