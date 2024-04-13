import React, { useContext } from "react";
import "./NeumorphismBox.css"; // Import CSS file for styling
import { MyContext } from "../MyContext";


const GP1 = () => {
  const { count, setCount } = useContext(MyContext);
  return (
    <div className="neumorphism-box">
      <h6>GP1</h6>
      <h6>Count: {count}</h6>
      <div style={{display: "flex"}}>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </div>
  );
};

export default GP1;
