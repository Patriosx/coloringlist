import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ResultContext from "../store/result-context";
import { colorToHex, genRandomColor } from "../utils/utils";
const ShowItem = ({ item }) => {
  const { addToResults, isOnResult } = useContext(ResultContext);

  function addToResult(e) {
    const id2 =
      e.target.style.backgroundColor === ""
        ? "#fff"
        : colorToHex(e.target.style.backgroundColor);

    if (!isOnResult(item.id)) {
      addToResults({
        id: item.id + id2,
        data: item.data,
        color: id2,
      });
    }
    return;
  }

  return (
    <Link to={`/result`}>
      <div
        className="data-container"
        style={{ backgroundColor: `#${genRandomColor()}` }}
        onClick={addToResult}
      >
        {item.data}
      </div>
    </Link>
  );
};

export default ShowItem;
