import { useState } from "react";

export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState);

    const increment = (value) => {
        setCounter((counter) => counter + value);
    }

    const decrement = (value) => {
        if (counter <= 0) return
        setCounter((counter) => counter - value);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}