function Add({ ...props }) {
  const { num1, num2 } = props;
  return <h2>Num: {num1 * num2}</h2>;
}

export default function PureComp({ ...props }) {
  const { num1, num2 } = props;
  return (
    <>
      <h2>Pure Component</h2>
      <Add num1={num1} num2={num2} />
      <Add num1={num1} num2={num2} />
      <Add num1={num1} num2={num2} />
    </>
  );
}
