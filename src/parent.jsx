import { Child, Child1 } from "./child";
function Parent() {
  var name = "rahul";
  var age = 30;
  let stu = {
    name: "Raman",
    city: "Delhi",
    stuId: 22,
  };
  let stu2 = {
    name: "Sanjeev",
    city: "Mumbai",
    stuId: 20,
  };
  let stu3 = {
    name: "Sanjna",
    city: "Jaipur",
    stuId: 35,
  };

  let collages = ["NIT", "PU", "CU", "RIEIT", "IIT"];

  return (
    <>
      {/* <h1>Manveer</h1> */}
      {/* <Child propkey={name} age={age} email="ran@gamil.com" /> */}
      {/* <Child student={stu} />
      <Child student={stu2} />
      <Child student={stu3} /> */}
      <Child1 Collage={collages[4]} />
      <Child1 Collage={collages[1]} />
      <Child1 Collage={collages[2]} />
    </>
  );
}
export default Parent;
