import React, { useState } from "react";
import Timer from "./Timer";

const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  return (
    <>
      <div className="StopWatch-App">
        <Timer time={time} />
      </div>
    </>
  );
};

export default StopWatch;
