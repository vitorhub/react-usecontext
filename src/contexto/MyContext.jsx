import React, { createContext } from "react";
import { useState } from "react";

export const PathContext = createContext(); // regular export

// A new component that will hold the context values and will wrap your <MyComponent>
const MyContext = ({ children }) => {
const [ estado , setEstado ] = useState("Estado default")

  return (
    <PathContext.Provider
      value={{ estado, setEstado }}
    >
      {children} Pass children props
    </PathContext.Provider>
  );
};

export default MyContext;