import React, { useState } from "react";

function App() {
  const initTime = new Date().toLocaleTimeString("it-IT");
  const [currentTime, setTime] = useState(initTime);

  function getCurrentTIme() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTIme}>Get Time</button>
    </div>
  );
}

export default App;
