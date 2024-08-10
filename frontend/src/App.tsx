import { useState } from "react";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import Stack from "./lib/stack";

function App() {
  const [valueDisplay, setValueDisplay] = useState<string>("");
  const [stack, setStack] = useState<Stack<string>>(new Stack<string>(4));

  const addDigit = (digit: string): void => {
    if (valueDisplay.length < 9) {
      setValueDisplay(valueDisplay + digit);
    }
  };

  const addOperator = (operator: string): void => {
    if (valueDisplay.length > 0) {
      setStack(stack.push(valueDisplay));
    }
    setValueDisplay(operator);
  };

  const numberButtons: JSX.Element[] = [];
  for (let i = 0; i < 10; ++i) {
    const button = (
      <button onClick={() => addDigit(i.toString())}>{i.toString()}</button>
    );
    numberButtons.push(button);
  }

  const operatorButtons: JSX.Element[] = ["+", "-", "*", "/"].map(
    (operator) => (
      <button onClick={() => addOperator(operator)}>{operator}</button>
    ),
  );

  return (
    <div id="App">
      <ResultDisplay value={valueDisplay} />
      <div>{numberButtons.map((btn) => btn)}</div>
      <div>{operatorButtons.map((btn) => btn)}</div>
    </div>
  );
}

export default App;
