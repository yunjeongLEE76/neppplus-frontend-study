import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};

export default Counter;
