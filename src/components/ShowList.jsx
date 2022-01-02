import React from "react";
import { Link } from "react-router-dom";

const ShowList = (props) => {
  console.log("%c List rendered! ", "background: red; color: #fff");

  const { list, setResult, coloring, getColor } = props;
  const onGetColor = (e) => {
    getColor(e.target.style.backgroundColor);
  };
  return (
    <div className="showlist-container">
      {list.map((el, i) => {
        return (
          <Link to={`/result`} key={i} onClick={() => setResult(el.data)}>
            <div
              className="data-container"
              style={{ backgroundColor: `#${coloring()}` }}
              onClick={onGetColor}
            >
              {el.data}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ShowList;
