import React from "react";
import "./comicstrip.css";
import Tile from "../Tile/Tile";

export default function ComicStrip() {
  const tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="comic">
      <h1 className="heading">Comic Strip Generator</h1>
      <div className="grid">
        {tiles.map((no, index) => (
          <Tile tileNo={no} key={index} />
        ))}
      </div>
    </div>
  );
}
