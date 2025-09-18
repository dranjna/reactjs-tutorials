import { useState } from "react";
import EffectComp from "./effectComponet";
import { use } from "react";

function App() {
  const [show, setshow] = useState(true);
  return (
    <div>
      {/* <button className="toggle-btn" onClick={() => setshow(!show)}>
        {show ? "Hide Componet" : "show Component"}
      </button> */}
      {show && <EffectComp />}
    </div>
  );
}

export default App;
