import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const resultRef = useRef<HTMLParagraphElement | null>(null);
  const [result, setResult] = useState<number>(0);

  function plus(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = Number(inputRef.current.value);
      setResult((result) => result + inputValue);
    }
    console.log('added');
  }

  function minus(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = Number(inputRef.current.value);

      setResult((result) => result - inputValue);
    }
  }

  function times(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (inputRef.current) {
      const inputValue = Number(inputRef.current.value);
      setResult((result) => result * inputValue);
    }
  }

  function divide(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (inputRef.current) {
      const inputValue = Number(inputRef.current.value);
      if (inputValue === 0) {
        alert("Cannot divide by 0");
        return;
      }
      setResult((result) => result / inputValue);
    }
  }

  function resetInput(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }

  function resetResult(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>
          {result}
        </p>
        <input
          pattern="[0-9]*"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
