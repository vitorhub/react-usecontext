import React, { useContext } from "react";
import { PathContext } from "../contexto/MyContext";

const MyComponent = () => {
  const { estado, setEstado } = useContext(PathContext);
    
  return (
    <div>
      <div>Estado: { estado }</div>
      <button onClick={() => setEstado("Troca estado") }> setEstado </button>
    </div>
  );
};

export default MyComponent;