import React from "react";

import "./styles.css";
import "./Components/Tile/tile.css";
import Entry from "./Components/Play/Entry";
import apps from "./Const/appConst";

export default function App() {
  return (
    <div className="App">
      {/* The always-visible JSX/HTML is declared here, as well as router links. Examples below:*/}
      <h1>
        <span> DFE Dashboard </span>
      </h1>
      <dl className="dictionary">
        <Entry />
        <Entry />
        <Entry />
      </dl>
    </div>
  );
}
