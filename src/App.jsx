import ImpureComponent from "./components/ImpureComponent";
import PureComp from "./components/PureComponent";

function App() {
  return (
    <>
      <ImpureComponent />
      <PureComp num1={2} num2={3} />
    </>
  );
}

export default App;
