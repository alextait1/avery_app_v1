import React from "react";

export const Clock = props => {
  return (
    <div className="clock-container">
      <p className="clock-hours">{props.hours}</p>
      <p className="clock-colon">:</p>
      <p className="clock-minutes">{props.minutes}</p>
      <p className="clock-colon">:</p>
      <p className="clock-seconds">{props.seconds}</p>
    </div>
  );
};
