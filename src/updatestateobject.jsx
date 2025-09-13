import { useState } from "react";

function Updateobject() {
  const [data, setData] = useState({
    name: "Ranjna",
    age: 20,
    address: {
      city: "Delhi",
      country: "India",
      detail: {
        Town: "APS",
        Distt: "Ropar",
      },
    },
  });
  const changeHandler = (val) => {
    // console.log("value", val);
    setData({ ...data, name: val, address: { ...data.address, country: "USA", detail: { ...data.address.detail, Town: "khsjas" } } });
    console.log(data);
  };
  return (
    <>
      <div className="update-container">
        <div className="update-card">
          <input type="text" placeholder="Enter your name" className="input" onChange={(e) => changeHandler(e.target.value)} />
        </div>
        <div className="output">
          <h3>Output</h3>
          <p>Name:{data.name}</p>
          <p>Age: {data.age}</p>
          <p>City:{data.address.city}</p>
          <p>Country:{data.address.country}</p>
          <p>Country:{data.address.detail.Town}</p>
          <p>Country:{data.address.detail.Distt}</p>
        </div>
      </div>
    </>
  );
}
export default Updateobject;

{
}
