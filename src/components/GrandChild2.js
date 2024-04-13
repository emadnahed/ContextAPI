import React from 'react';
import './NeumorphismBox.css'; // Import CSS file for styling
import { MyContext } from '../MyContext';

const GrandChild2 = () => {
  const { count, setCount } = React.useContext(MyContext);
  return (
    <div className="neumorphism-box" style={{ height: "130px", width: "130px", margin: "20px" }}>
      
      <h6>GrandChild 2</h6>
      <h6>Count: {count}</h6>
      <div style={{display: "flex"}}>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </div>
  );
};

export default GrandChild2;