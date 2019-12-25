import React, { useState, useEffect } from "react";
import Item from "./Item";
import "./styles.css";

const List = props => {
  const [activeChannel, setActiveChannel] = useState();

  useEffect(() => {
    console.log(activeChannel);
  }, [activeChannel]);

  return (
    <div className="channelList">
      {props.channels.map((channel, channelIndex) => (
        <div
          className={
            activeChannel === channel ? "activeChannelBox" : "channelBox"
          }
          key={channelIndex}
        >
          <Item
            channel={channel}
            onClick={() => {
              setActiveChannel(channel);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default List;
