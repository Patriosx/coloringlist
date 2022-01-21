import React, { useContext } from "react";
import ResultContext from "../store/result-context";
const Result = () => {
  // console.log("%c Result rendered! ", "background: blue; color: #fff");
  const resultCtx = useContext(ResultContext);

  const removeResult = (id) => {
    resultCtx.removeFromResults(id);
  };

  let content;
  if (resultCtx.totalResult === 0) {
    content = <h1>{"You got no results"}</h1>;
  } else {
    content = resultCtx.results.map((item) => {
      return (
        <div
          key={item.id}
          className="result-container"
          style={{ backgroundColor: item.color }}
          onClick={() => removeResult(item.id)}
        >
          <h1>{item.data}</h1>
        </div>
      );
    });
  }
  return <div>{content}</div>;
};

export default Result;
