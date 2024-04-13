import "./App.css";
import React from "react";
import GP1 from "./components/GP1";
import { MyContext } from "./MyContext";
import GP2 from "./components/GP2";

function App() {
  const [count, setCount] = React.useState(0);
  // There are two Grandparent components, GP is GrandParent
  return (
    <div className="main">
      <MyContext.Provider value={{ count, setCount }}>
        <GP1 />
        <GP2 />
      </MyContext.Provider>
    </div>
  );
}

export default App;
