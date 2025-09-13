import { useState } from "react";

function Updatearray() {
  const [data, setdata] = useState(["Apple", "Banana", "Kiwi", "Oranage", "Date"]);
  const updateData = () => {
    setdata([...data]);
  };
  const changeHandler = (val) => {
    var new_val = [...data];
    data[new_val.length - 1] = val;
  };
  return (
    <>
      {data.map((item, index) => {
        return <h1 key={index}>{item}</h1>;
      })}
      <input type="text" name="" id="" onChange={(e) => changeHandler(e.target.value)} className="input" />
      <button onClick={updateData}>update</button>
    </>
  );
}
export default Updatearray;
