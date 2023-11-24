import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [focus, setFocus] = useState(null);
  // const [imgSrcs, setImgSrcs] = useState(new Array(10).fill(""));
  const [loaders, setLoaders] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
  });
  const [src, setSrc] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });
  const [prompts, setPrompts] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
  });

  return (
    <UserContext.Provider
      value={{
        focus,
        setFocus,
        loaders,
        setLoaders,
        src,
        setSrc,
        prompts,
        setPrompts,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
