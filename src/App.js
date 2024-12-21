import React, {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 

  function getInputNumber() {
    return Number(inputRef.current.value);
  }
  
  function plus(e) { 
    e.preventDefault(); 
    const inputNumber = getInputNumber()
    setResult((result) => result + inputNumber)
    console.log('added')
    resetInput(e)
  }; 
 
  function minus(e) {
    e.preventDefault();
    const inputNumber = getInputNumber()
    setResult((result) => result - inputNumber)
   resetInput(e)
  };
 
  function times(e) {
    e.preventDefault();
    const inputNumber = getInputNumber()
    setResult((result) => result * inputNumber)
    resetInput(e)
  }; 
 
  function divide(e) {
    e.preventDefault();
    if(result === 0){
      alert("Cannot divide by 0")
    }
    const inputNumber = getInputNumber()
    setResult((result) => result / inputNumber)
    resetInput(e)
  };
 
  function resetInput(e) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = null;
    }
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult((result) => 0);
    resetInput(e)
  }; 
 
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
          pattern="[0-9]" 
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
