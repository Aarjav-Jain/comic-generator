import React, { useContext, useEffect, useState } from "react";
import "./sidepanel.css";
import { generateImage } from "../../api/generateImage";
import UserContext from "../../context/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SidePanel() {
  const [value, setValue] = useState("");

  const { focus, loaders, setLoaders, setPrompts, setSrc } =
    useContext(UserContext);

  const handleClick = async () => {
    if (value == "")
      toast.info("Please Input a Prompt", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "dark",
      });
    else if (!focus) {
      toast.info("Please Select a Tile", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        // draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      try {
        setLoaders((prev) => {
          return { ...prev, [focus]: true };
        });
        const res = await generateImage({ inputs: value });

        if (res) {
          const objectURL = URL.createObjectURL(res);
          setSrc((prev) => {
            return { ...prev, [focus]: objectURL };
          });
          setPrompts((prev) => {
            return { ...prev, [focus]: value };
          });
        } else {
          toast.error("Could Not Generate Image", {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("could not generate, empty res");
        }
      } catch (e) {
        toast.error("Could Not Generate Image", {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          // draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log("error", e);
      } finally {
        setLoaders((prev) => {
          return { ...prev, [focus]: false };
        });
      }
    }
  };

  return (
    <div className="side">
      <div className="title">Generate Image</div>
      <textarea
        name="prompt-box"
        id="prompt-box"
        // cols="30"
        rows="4"
        style={{
          resize: "none",
          margin: "10px 10px",
          backgroundColor: "#f1faee",
          padding: "10px",
          fontSize: "large",
          borderRadius: "10px",
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Prompt"
      ></textarea>
      <button className="btn" onClick={handleClick}>
        Generate
      </button>
    </div>
  );
}

export default SidePanel;
