import React from "react";
import "./App.css";
import List from "./components/List";

const channels = [
  {
    name: "RTS1",
    lcn: 1
  },
  {
    name: "RTS2",
    lcn: 2
  },
  {
    name: "RTS3",
    lcn: 3
  },
  {
    name: "Pink",
    lcn: 4
  }
];

const channels2 = [
  {
    name: "HBO",
    lcn: 1
  },
  {
    name: "HBO2",
    lcn: 2
  },
  {
    name: "HBO3",
    lcn: 3
  },
  {
    name: "Pink",
    lcn: 4
  }
];

function App() {
  return (
    <div className="App">
      <List channels={channels} />
      <List channels={channels2} />
    </div>
  );
}

export default App;
