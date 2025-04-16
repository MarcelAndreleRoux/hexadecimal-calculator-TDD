"use client";

import React, { useState } from "react";
import { hexAdd, hexSubtract, hexMultiply, hexDivide } from "@/lib/calculator";

interface CalculatorProps {
  displayValue: string;
  setDisplayValue: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const Calculator = ({
  displayValue,
  setDisplayValue,
  setError,
}: CalculatorProps) => {
  const [firstNum, setfirstNum] = useState<string>("");
  const [secondNum, setsecondNum] = useState<string>("");
  const [doSecond, setdoSecond] = useState<boolean>(false);
  const [oprand, setoprand] = useState<string>("");

  const first_colum = ["A", "D", "1", "4", "7"];
  const second_colum = ["B", "E", "2", "5", "8"];
  const third_column = ["C", "F", "3", "6", "9"];
  const oprands = ["*", "/", "+", "-"];

  const handleClear = () => {
    setError("");
    setfirstNum("");
    setsecondNum("");
    setDisplayValue("0");
    setdoSecond(false);
  };

  const handleOprandClick = (oprand: string) => {
    setError("");
    if (displayValue !== "0") {
      setdoSecond(true);
    }
    setoprand(oprand);
    setDisplayValue("0");
  };

  const handleButtonClick = (value: string): void => {
    setError("");
    if (doSecond === false) {
      setfirstNum((prev) => prev + value);
      setDisplayValue((prev) => (prev === "0" ? value : prev + value));
    } else {
      setsecondNum((prev) => prev + value);
      setDisplayValue((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const calculate = (
    firstNum: string,
    secondNum: string,
    oprand: string
  ): string => {
    switch (oprand) {
      case "+":
        return hexAdd(firstNum, secondNum);
      case "-":
        return hexSubtract(firstNum, secondNum);
      case "*":
        return hexMultiply(firstNum, secondNum);
      case "/":
        return hexDivide(firstNum, secondNum);
      default:
        return "Choose a correct oprand, (+, -, *, /)";
    }
  };

  const handleEquals = () => {
    setError("");
    try {
      if (firstNum && secondNum && oprand) {
        const result = calculate(firstNum, secondNum, oprand);
        // Set result as new first number
        setfirstNum(result);
        // Reset second number and operator
        setsecondNum("");
        setoprand("");
        // Update display and clear second input flag
        setDisplayValue(result);
        setdoSecond(false);
        setError("");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
        setDisplayValue("0");
        // Reset all states on error
        setfirstNum("");
        setsecondNum("");
        setdoSecond(false);
      }
    }
  };

  return (
    <div className="grid grid-cols-5 gap-2 text-teal-950">
      {/* Number Columns */}
      {[first_colum, second_colum, third_column].map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-2">
          {column.map((x) => (
            <button
              key={x}
              className="num_button bg-gray-100 hover:bg-gray-200 hover:cursor-pointer p-4 rounded-lg text-xl font-medium transition-colors"
              data-testid={x}
              onClick={() => handleButtonClick(x)}
            >
              {x}
            </button>
          ))}
        </div>
      ))}

      {/* Operations Column */}
      <div className="flex flex-col gap-2">
        {oprands.map((x) => (
          <button
            key={x}
            className="bg-amber-600 hover:bg-amber-700 hover:cursor-pointer text-white p-4 rounded-lg text-xl font-medium transition-colors"
            data-testid={x}
            onClick={() => handleOprandClick(x)}
          >
            {x}
          </button>
        ))}
      </div>

      {/* Special Operations */}
      <div className="flex flex-col gap-2">
        <button
          className="equals-btn bg-lime-600 hover:bg-lime-700 hover:cursor-pointer text-white p-4 rounded-lg text-xl font-medium transition-colors"
          data-testid="equals-btn"
          onClick={handleEquals}
        >
          =
        </button>
        <button
          className="clear-btn bg-red-400 hover:bg-red-700 hover:cursor-pointer text-white p-4 rounded-lg text-xl font-medium transition-colors"
          data-testid="clear-btn"
          onClick={handleClear}
        >
          CLR
        </button>
      </div>
    </div>
  );
};

export default Calculator;
