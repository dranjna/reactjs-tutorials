function Jsxpractice() {
  const name = "Ranjna";
  let a = 10;
  let b = 20;
  function func(a, b) {
    alert("Hi " + (a + b));
  }
  let isLogged = false;
  let arr = ["banana", "apple", "kiwi"];
  let obj = { name: "ranjna", age: 20 };

  return (
    <>
      <h1>Welcome {name}</h1>
      <h1>sum: {a + b}</h1>
      {/* <h1>{func()}</h1> */}
      <button onClick={() => func(10, 20)}>Click me</button>
      <h1>{isLogged ? "Welcome to team" : "Please Login"}</h1>
      <h1>arr: {arr[0]}</h1>
      <h1>
        obj: {obj.name} {obj.age}
      </h1>
    </>
  );
}
export default Jsxpractice;
