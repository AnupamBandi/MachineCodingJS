import React, { useEffect, useState } from "react";

const Counter = ({abc}) => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");

  const handleIncrease = () => {
    setCount((x) => x + 1);
    setCount((prev) => prev + 1);
    //setter funciton takes 2 kinds of i/p 1.state update 2.realtime state isthadhi
  };


  const handleDecrease = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleColor = () => {
    setColor((prev) => (prev === "black" ? "green" : "black"));
  };

  useEffect(() => {
    console.log(count, "here is the count");
  }, [count]);

  return (
    <div>
      <div
        style={{ background: color || abc, color: "white" }}
      >{`Count ${count}`}</div>
      <div>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrease}>Decrement</button>
        <button onClick={handleColor}>change color</button>
      </div>
    </div>
  );
};

export default Counter;
