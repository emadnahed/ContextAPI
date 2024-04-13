import React, { useContext } from "react";
import "./NeumorphismBox.css"; // Import CSS file for styling
import Child from "./Child";
import { MyContext } from "../MyContext";


const GP2 = () => {
  const { count, setCount } = useContext(MyContext);
  // GP is GrandParent and this is second grand parent nested with a child component
  return (
    <>
      <div className="parent">
        <div className="neumorphism-box">
          <h6>GrandParent 2</h6>
          <h6>Count: {count}</h6>
        <div style={{ display: "flex" }}>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
          </div>
        
        <div className="children">
          
          <Child />
        </div>
      </div>
    </>
  );
};

export default GP2;
