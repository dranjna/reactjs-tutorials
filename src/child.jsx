function Child({ student }) {
  console.log(student);
  return (
    <>
      <hr />
      <h1>Name: {student.name}</h1>
      <h1>City: {student.city}</h1>
      <h1>stuId: {student.stuId}</h1>
    </>
  );
}

function Child1({ Collage }) {
  console.log(Collage);
  return (
    <>
      <hr />
      <h1>Name: {Collage + ""}</h1>
    </>
  );
}
export { Child, Child1 };
