import { useState } from "react";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import Stack from "./lib/stack";

function App() {
  // TODO: Move stack and operations to the backend.
  const [displayedValue, setDisplayedValue] = useState<string>("");
  const [displayedOperator, setDisplayedOperator] = useState<string>("");
  const [stack, setStack] = useState<Stack<string>>(new Stack<string>(255));

  const addDigit = (digit: string): void => {
    if (displayedValue.length < 8) {
      setDisplayedValue(displayedValue + digit);
    }
  };

  const handleOperatorClick = (operator: string) => {
    if (displayedValue.length === 0) {
      return;
    }

    try {
      setStack(stack.push(displayedValue));

      if (displayedOperator !== "") {
        setStack(stack.push(displayedOperator));
      }

      setDisplayedOperator(operator);
      setDisplayedValue("");
    } catch (err: unknown) {
      setDisplayedOperator("");
      setDisplayedValue("ERR");
    }
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
      <button onClick={() => handleOperatorClick(operator)}>{operator}</button>
    ),
  );

  return (
    <div id="App">
      <div>
        <div>{displayedOperator}</div>
        <ResultDisplay value={displayedValue} />
      </div>
      <div>{numberButtons.map((btn) => btn)}</div>
      <div>{operatorButtons.map((btn) => btn)}</div>
    </div>
  );
}

export default App;
