import React, { useState } from "react";

export interface TockProps {}
export const Tock = (_props: TockProps) => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((count) => count - 1);
  };
  return <button onClick={onClick}>{count}</button>;
};

Tock.displayname = "Tock";
