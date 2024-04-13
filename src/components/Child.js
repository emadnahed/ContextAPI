import React from "react";
import "./NeumorphismBox.css"; // Import CSS file for styling
import { MyContext } from "../MyContext";
import GrandChild1 from "./GrandChild1";
import GrandChild2 from "./GrandChild2";

const Child = () => {
  const { count, setCount } = React.useContext(MyContext);
  return (
    <div className="parent">
      <div
        className="neumorphism-box"
        style={{ height: "130px", width: "130px", margin: "20px", padding: "40px" }}
      >
        <h6>Child</h6>
        <h6>Count: {count}</h6>
        <div style={{ display: "flex" }}>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
      </div>

      <div className="children">
        <GrandChild1 />
        <GrandChild2 />
      </div>
    </div>
  );
};

export default Child;
