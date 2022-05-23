import React, { useState } from "react";

export interface TickProps {}
export const Tick = (_props: TickProps) => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((count) => count + 1);
  };
  return React.createElement(
    "button",
    {
      onClick,
    },
    count.toString()
  );
  // return  <button onClick={onClick}>{count}</button>
};

Tick.displayname = "Tick";
