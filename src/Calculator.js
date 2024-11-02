import React, { useState } from "react";
import "./Calculator.scss";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => (b !== 0 ? a / b : "Erro"),
  };

  const handleOperation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    const res = operations[operation](a, b);
    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Calculadora</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <div className="buttons">
        {Object.keys(operations).map((op) => (
          <button key={op} onClick={() => handleOperation(op)}>
            {op === "add"
              ? "+"
              : op === "subtract"
              ? "-"
              : op === "multiply"
              ? "*"
              : "/"}
          </button>
        ))}
      </div>
      <h2>Resultado {result}</h2>
    </div>
  );
};

export default Calculator;
