import React, {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
  
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value))
    console.log('added')
  }; 
 
  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value))
  };
 
  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value))
  }; 
 
  function divide(e) {
    e.preventDefault();
    if( Number(inputRef.current.value) === 0){
      alert("Cannot divide by 0")
      return;
    }
    setResult((result) => result / Number(inputRef.current.value))
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

// import {
//   useState,
//   useRef
// } from "react"; 
// import "./App.css";

// function App() { 
//   const inputRef = useRef(null); 
//   const resultRef = useRef(null); 
//   const [result, setResult] = useState(0); 
 
//   function plus(e) { 
//     e.preventDefault();
//     setResult((result) => result + Number(inputRef.current.value));
//   }; 
 
//   function minus(e) { 
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//   };
 
//   function times(e) { 
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//   }; 
 
//   function divide(e) { 
//     e.preventDefault();
//     const inputVal = Number(inputRef.current.value);
//     if (inputVal == 0) {
//       alert('Division by zero is forbidden!');
//       return;
//     }
//     setResult((result) => result / inputVal);
//   };
 
//   function resetInput(e) {
//     e.preventDefault();
//     inputRef.current.value = '0';
//   }; 
 
//   function resetResult(e) { 
//     e.preventDefault();
//     setResult(0);
//   }; 
 
//   return ( 
//     <div className="App"> 
//       <div> 
//         <h1>Simplest Working Calculator</h1> 
//       </div> 
//       <form> 
//         <p ref={resultRef}> 
//           { result } 
//         </p> 
//         <input
//           pattern="[0-9]" 
//           ref={inputRef} 
//           type="number" 
//           placeholder="Type a number" 
//         /> 
//         <button onClick={plus}>add</button>
//         <button onClick={minus}>substract</button>
//         <button onClick={times}>multiply</button>
//         <button onClick={divide}>divide</button>
//         <button onClick={resetInput}>reset input</button>
//         <button onClick={resetResult}>reset result</button>
//       </form> 
//     </div> 
//   ); 
// } 
 
// export default App; 
