import React from "react";
import ShowItem from "./ShowItem";

const ShowList = ({ list }) => {
  // console.log("%c List rendered! ", "background: red; color: #fff");
  return (
    <div className="showlist-container">
      {list.map((item) => {
        return <ShowItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ShowList;
