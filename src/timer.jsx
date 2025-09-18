import { useState, useEffect } from "react";

function Timer() {
  useEffect(() => {
    const interval = setInterval(() => console.log("Running..."), 1000);
    return () => console.log("Cleanup done!");
  }, []);

  return <h2>Timer is running</h2>;
}

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle Timer</button>
      {show && <Timer />}
    </div>
  );
}

export default App;
