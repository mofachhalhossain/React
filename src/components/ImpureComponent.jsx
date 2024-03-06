let num1 = 0;

function Addition() {
  num1 = num1 + 1;
  return <h2>Num: {num1}</h2>;
}

export default function ImpureComponent() {
  return (
    <>
    <h2>Impure Component</h2>
      <Addition />
      <Addition />
      <Addition />
      <Addition />
      <hr />
    </>
  );
}
