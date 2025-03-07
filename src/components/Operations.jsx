import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Timer from "./Timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Operations = () => {
  const NewNumber = () => Math.floor(Math.random() * 10) + 1;

  const inputRef = useRef();
  const [key, setKey] = useState(0);
  const [counterCorrect, setCounterCorrect] = useState(0);
  const [counterOperation, setCounterOperation] = useState(0);
  const [result, setResult] = useState("");
  const [sumVal1, setSumVal1] = useState(NewNumber);
  const [sumVal2, setSumVal2] = useState(NewNumber);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    setIsPlaying(true);
    setKey((prevKey) => prevKey + 1);
    setCounterCorrect(0);
    setCounterOperation(0);
    inputRef.current?.focus();
  };

  const handleChange = (e) => {
    if (e.key === "Enter") {
      processOperation();
      inputRef.current?.focus();
    } else {
      if (e.target.validity.valid) {
        setResult(e.target.value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    processOperation();
  };

  const handleFinish =()=>{
    //setIsPlaying(false);
  }

  const processOperation = () => {
    if (sumVal1 * sumVal2 == result) {
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
      <Button onClick={handleStart}>Iniciar</Button>
      <hr />
      {isPlaying && (
        <div className="timer-wrapper">
          <CountdownCircleTimer
            key={key}
            isPlaying
            duration={60}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => {
              handleFinish();
              return { shouldRepeat: false, delay: 1 };
            }}
          >
            {Timer}
          </CountdownCircleTimer>
        </div>
      )}
      {isPlaying && (
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" />
          <Form.Label name="operationValues" size="lg">
            <h2>
              {sumVal1} X {sumVal2}
            </h2>
          </Form.Label>
          <br />
          <Form.Control
            type="text"
            name="result"
            id="result"
            value={result}
            onChange={handleChange}
            ref={inputRef}
            pattern="[0-9]{0,5}"
            size="lg"
          />
          <br />
          <Button type="submit" variant="primary" disabled={!isPlaying}>
            Enviar
          </Button>
          <hr />
          <label>Num operaciones: {counterOperation}</label>
          <br />
          <label>Operaciones correctas: {counterCorrect}</label>
        </Form>
      )}
    </>
  );
};

export default Operations;
