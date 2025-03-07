import React, { useRef, useState } from "react";


const Operations = () => {
  const NewNumber = () => Math.floor(Math.random() * 10) + 1;

  const inputRef = useRef();
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterOperation, setCounterOperation] = useState(0);
  const [result, setResult] = useState("");
  const [sumVal1, setSumVal1] = useState(NewNumber);
  const [sumVal2, setSumVal2] = useState(NewNumber);

  const handleChange = (e) => {
    if (e.key === "Enter") {
      processOperation();
      inputRef.current?.focus();

    } else {
      setResult(e.target.value);
      console.log(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processOperation();
  };

  const processOperation = () => {
    if (sumVal1 + sumVal2 == result) {
      setCounterCorrect(counterCorrect + 1);
    }
    nextOperation();
  };

  const nextOperation = () => {
    setCounterOperation(counterOperation + 1);
    setSumVal1(NewNumber);
    setSumVal2(NewNumber);
    setResult("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label name="operationValues">
          {sumVal1}+{sumVal2}
        </label>
        <br />
        <input
          type="text"
          name="result"
          id="result"
          value ={result}
          onChange={handleChange}
          ref={inputRef}
        />
        <br />
        <input type="submit" value="send" />
        <hr/>
        <label>Num operaciones: {counterOperation}</label>
        <br/>
        <label>Operaciones correctas: {counterCorrect}</label>

      </form>
    </>
  );
};

export default Operations;
