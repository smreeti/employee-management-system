import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const UseMemoExample = () => {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        return num * 100;
    };

    const result = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]);

    return (
        <div>
            <button onClick={() => navigate("/references")}> ⬅ Back to References </button>
            <h2>useMemo Example</h2>

            <p>Result: {result}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
};