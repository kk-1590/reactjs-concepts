import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <h2>Counter in React</h2>
      <h3>{count}</h3>
      <button onClick={() => increment()}>Increment</button>
      <br />
      <button onClick={() => decrement()}>Decrement</button>
    </>
  );
}

export default App;
