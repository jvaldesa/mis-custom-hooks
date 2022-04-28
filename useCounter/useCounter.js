import { useState } from "react";

export const useCounter = (initialSatate = 10) => {

  const [counter, setCounter] = useState(initialSatate);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(initialSatate)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }

};
