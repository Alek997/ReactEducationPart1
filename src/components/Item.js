import React from "react";
import "./styles.css";

const Item = ({ channel, onClick }) => {
  console.log(channel);
  return (
    <div onClick={onClick}>
      <h3>{channel.name}</h3>
      <p>{channel.lcn}</p>
    </div>
  );
};

export default Item;
