import { useState } from "react";

export const UseStateExample = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h2>useState Example</h2>
            <h2>Count: {count}</h2>
            <div className="buttons-section">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    );
}
