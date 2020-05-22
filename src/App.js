import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    document.title = `I have clicked ${count} times.`;
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [count]);

  const toggleLight = () => setIsOn(prevIsOn => !prevIsOn);

  const handleMouseMove = event =>
    setMousePosition({ x: event.pageX, y: event.pageY });

  return (
    <div className="wrapper">
      <h2>Counter</h2>
      <button onClick={incrementCount}>I clicked {count}</button>

      <h2>Toggle Light</h2>
      <img
        onClick={toggleLight}
        alt="Toggle Light"
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/000"
        }
        style={{ height: "50px", width: "50px", cursor: "pointer" }}
      />

      <h2>Mouse Position</h2>
      <p>
        {JSON.stringify(mousePosition, null, 2)} <br />
      </p>
    </div>
  );
};

export default App;
