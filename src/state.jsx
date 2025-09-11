import { useState } from "react";
function Statecomp() {
  //   var fruite = "Banana";

  //   const varfun = () => {
  //     fruite = "Apple";
  //     console.log(fruite);
  //   };
  const [data, setData] = useState("Banana");
  const [Counter, abc] = useState(0);

  return (
    <>
      <h1>{data}</h1>
      {/* <button onClick={varfun}>Variable button</button> */}
      <button onClick={() => setData("Apple")}>State button</button>
      <h1>{Counter}</h1>
      <button onClick={() => abc(Counter + 1)}>Increment</button>
      <button onClick={() => abc(Counter - 1)}>Decrement</button>
      <button onClick={() => abc(0)}>Reset</button>
    </>
  );
}
export default Statecomp;
