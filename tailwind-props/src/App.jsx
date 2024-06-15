import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "kartik",
    age: 22,
  };

  //React Batching for optimisation
  const addValue = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1 className="bg-green-400 mb-5 px-10 text-black rounded-xl">
        Tailwind Test
      </h1>
      <h3>{count}</h3>
      <button onClick={() => addValue()}>Increment</button>
      {/* <Card channel="chai aur code" obj={myObj} username="Aman" /> */}
      {/* <Card username="Mohit" /> */}
    </>
  );
}

export default App;
