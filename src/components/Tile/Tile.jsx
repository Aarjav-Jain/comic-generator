import React, { useContext, useEffect } from "react";
import "./tile.css";
import UserContext from "../../context/UserContext";
function Tile({ tileNo }) {
  const { loaders, setFocus, focus, src, prompts } = useContext(UserContext);

  // useEffect(() => {
  //   console.log("in tile", loaders[tileNo]);
  // }, [loaders]);

  return (
    <div
      title={prompts[tileNo]}
      className={`${loaders[tileNo] ? "no-hover" : "image-tile"} `}
      style={
        focus == tileNo
          ? { borderColor: "black", borderWidth: "3px", borderStyle: "solid" }
          : { borderColor: "grey", borderWidth: "2px", borderStyle: "dashed" }
      }
      onClick={
        loaders[tileNo] ? (e) => e.preventDefault() : () => setFocus(tileNo)
      }
    >
      {loaders[tileNo] ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : src[tileNo] === "" ? (
        <div className="text">Click to Edit</div>
      ) : (
        <img className="img" src={src[tileNo]} alt="image" />
      )}
    </div>
  );
}

export default Tile;
