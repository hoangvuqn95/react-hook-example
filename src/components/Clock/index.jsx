import React from "react";
import useClock from "../../hooks/useClock";

Clock.propTypes = {};

function Clock() {
  const { timeString } = useClock();
  return (
    <div>
      <p style={{ fontSize: "42px", color: "purple" }}>{timeString}</p>
    </div>
  );
}

export default Clock;
