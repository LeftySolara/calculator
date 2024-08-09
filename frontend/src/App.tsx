import { useState } from "react";
import NumberButton from "./components/NumberButton/NumberButton";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";

function App() {
  const [displayValue, setDisplayValue] = useState<string>("0");

  const addDigit = (digit: string): void => {
    if (displayValue.length < 9) {
      setDisplayValue(displayValue + digit);
    }
  };

  const handleNumberButtonClick = (value: string) => {
    addDigit(value);
  };

  const numberButtons = [];
  for (let i = 0; i < 10; ++i) {
    numberButtons[i] = (
      <NumberButton value={i} handleClick={handleNumberButtonClick} />
    );
  }

  return (
    <div id="App">
      <ResultDisplay value={displayValue} />
      <div>{numberButtons.map((btn) => btn)}</div>
    </div>
  );
}

export default App;
