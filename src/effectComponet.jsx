import { useEffect, useState } from "react";

function EffectComp() {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState(10);
  useEffect(() => {
    effectfun();
    return () => {
      console.log("unmount");
    };
  }, [count]);
  function effectfun() {
    console.log("Mount Counponent");
  }

  return (
    <div className="effect-container">
      <div>
        <h2 className="data-display">{count}</h2>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
      <br />
      <div>
        <h2 className="data-display">{data}</h2>
        <button className="btn" onClick={() => setdata(data - 1)}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default EffectComp;
