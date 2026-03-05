import { Hello } from "./Hello";
import React, { useReducer, useState, useCallback, useMemo } from 'react';

export const About = ({ title }) => {

    const initialState = { count: 0 };

    const reducer = (state, action) => {

        switch (action.type) {
            case "Increment":
                return { count: state.count + 1 };
            case "Decrement":
                return { count: state.count - 1 };
            case "Reset":
                return initialState;
            default:
                return state;
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    ////////////////////////////////////////////////////////////////////////
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const Button = React.memo(({ onClick, text }) => {
        console.log(`${text} button rendered`);
        return <button onClick={onClick}>{text}</button>;
    });

    // These functions are memoized and only recreated when dependencies change
    const handleClick1 = useCallback(() => {
        setCount1(count1 + 1);
    }, [count1]);

    const handleClick2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    ////////////////////////////////////////////////////////////////////////
    const [memoCount1, setMemoCount1] = useState(0);

    const expensiveCalculation = (num) => {
        return num * 100;
    }

    const result = useMemo(() => {
        return expensiveCalculation(memoCount1);
    }, [memoCount1]);



    return (
        <>
            <h2>  {title ? title : "This is about page"} </h2>
            <Hello />

            <hr />
            <h3>useReducer example</h3>

            <p> Count: {state.count}</p>

            <button onClick={() => dispatch({ type: 'Increment' })}>Increase</button>
            <button onClick={() => dispatch({ type: 'Decrement' })}>Decrease</button>
            <button onClick={() => dispatch({ type: 'Reset' })}>Reset</button>

            <hr />
            <h3>useCallback example</h3>

            <div>
                <h2>With useCallback:</h2>
                <p>Count 1: {count1}</p>
                <p>Count 2: {count2}</p>
                <Button onClick={handleClick1} text="Button 1" />
                <Button onClick={handleClick2} text="Button 2" />
            </div>

            <hr />
            <h3>useMemo example</h3>
            <h4>Result: {result}</h4>

            <button onClick={() => setMemoCount1(memoCount1 + 1)} text="Button 1"> Memo Button </button>

        </>
    );
}