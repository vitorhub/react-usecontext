import React from "react";
import MyContext from "./contexto/MyContext";
import MyComponent from "./components/MyComponent";

export default function App() {
  return (
    <div className="App">
      <MyContext>
        <MyComponent />
      </MyContext>
    </div>
  );
}