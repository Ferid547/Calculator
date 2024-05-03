import { useState } from "react";
import "./App.css";

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [firstValue, setFirstValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState(false);

  const handleNumberInput = (num) => {
    if (waitingForSecondValue) {
      setDisplayValue(String(num));
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === "0" ? String(num) : displayValue + num);
    }
  };

  const handleOperatorInput = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const result = performCalculation(operator, firstValue, inputValue);
      setDisplayValue(String(result));
      setFirstValue(result);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const performCalculation = (operator, firstValue, secondValue) => {
    if (operator === "+") {
      return firstValue + secondValue;
    } else if (operator === "-") {
      return firstValue - secondValue;
    } else if (operator === "x") {
      return firstValue * secondValue;
    } else if (operator === "/") {
      return firstValue / secondValue;
    }

    return secondValue;
  };

  const handleClear = () => {
    setDisplayValue("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const handleToggleSign = () => {
    const newValue = parseFloat(displayValue) * -1;
    setDisplayValue(String(newValue));
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(displayValue);
    const newValue = currentValue / 100;
    setDisplayValue(String(newValue));
  };

  return (
    <>
      <div className="main">
        <div className="calculator">
          <div className="calculator_text">
            <input type="number" value={displayValue} readOnly />
            <span className="operator">{operator}</span>{" "}
          </div>
          <div className="calculator_numbers">
            <div className="calculator_numbersLine">
              <div className="calculator_first">
                <div className="calculator_firstLine" onClick={handleClear}>
                  AC
                </div>
                <div
                  className="calculator_firstLine"
                  onClick={handleToggleSign}
                >
                  +/-
                </div>
                <div
                  className="calculator_firstLine"
                  onClick={handlePercentage}
                >
                  %
                </div>
              </div>
              <div className="calculator_second">
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("1")}
                >
                  1
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("2")}
                >
                  2
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("3")}
                >
                  3
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("4")}
                >
                  4
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("5")}
                >
                  5
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("6")}
                >
                  6
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("7")}
                >
                  7
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("8")}
                >
                  8
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("9")}
                >
                  9
                </div>
                <div
                  className="calculator_secondLine"
                  onClick={() => handleNumberInput("0")}
                >
                  0
                </div>
                <div
                  className="calculator_secondLine"
                  style={{ width: "80px" }}
                  onClick={() => handleNumberInput(".")}
                >
                  .
                </div>
              </div>
            </div>
            <div className="calculator_third">
              <div
                className="calculator_thirdLine"
                onClick={() => handleOperatorInput("/")}
              >
                /
              </div>
              <div
                className="calculator_thirdLine"
                onClick={() => handleOperatorInput("x")}
              >
                x
              </div>
              <div
                className="calculator_thirdLine"
                onClick={() => handleOperatorInput("-")}
              >
                -
              </div>
              <div
                className="calculator_thirdLine"
                onClick={() => handleOperatorInput("+")}
              >
                +
              </div>
              <div
                className="calculator_thirdLine"
                onClick={() => handleOperatorInput("=")}
              >
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
