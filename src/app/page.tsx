"use client";

import { useState } from "react";
import Calculator from "./components/calculator";

export default function Home() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [error, setError] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="calculator bg-white max-w-lg w-full rounded-xl shadow-2xl p-6">
        <div
          data-testid="calculator-display"
          className="mb-6 bg-gray-800 rounded-lg p-4"
        >
          <span
            data-testid="display-value"
            className="display-num text-white text-4xl font-medium block text-left"
          >
            {displayValue}
          </span>
          <span data-testid="error-message" className="error text-red-900">
            {error}
          </span>
        </div>
        <div className="calculator-buttons-numbers">
          <Calculator
            displayValue={displayValue}
            setDisplayValue={setDisplayValue}
            setError={setError}
          />
        </div>
      </div>
    </div>
  );
}
