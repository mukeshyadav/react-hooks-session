import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    document.title = `I have clicked ${count} times.`;
  });

  const toggleLight = () => setIsOn(prevIsOn => !prevIsOn);

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
    </div>
  );
};

export default App;
