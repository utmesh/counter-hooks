import React, { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={() => setCount(Count + 1)}>+</button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        restart
      </button>
      <button onClick={() => setCount(Count - 1)}>-</button>
    </div>
  );
}

export default App;
