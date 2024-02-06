import React from "react";

const Timer = (props) => {
  return (
    <div className="timer-container">
      <span className="time">
        {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="time">
        {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}:
      </span>
      <span className="time mili-sec">
        {("0" + ((props.time / 60000) % 10)).slice(-2)}
      </span>
    </div>
  );
};

export default Timer;
