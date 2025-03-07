import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ remainingTime }) => {
    
  if (remainingTime === 0) {
    return <div className="timer">Finished</div>;
  }
  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default Timer;
