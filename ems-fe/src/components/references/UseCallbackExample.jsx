import { useCallback, useState } from "react";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export const UseCallbackExample = () => {
    const navigate = useNavigate();
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick1 = useCallback(() => {
        setCount1((prev) => prev + 1);
    }, [count1]);

    const handleClick2 = useCallback(() => {
        setCount2((prev) => prev + 1);
    }, [count2]);

    return (
        <>
            <button onClick={() => navigate("/references")}> ⬅ Back to References </button>
            <h1>Callback Example</h1>

            <p>Count 1: {count1}</p>
            <p>Count 2: {count2}</p>
            <Button onClick={handleClick1} text="Button 1" />
            <Button onClick={handleClick2} text="Button 2" />
        </>
    )
}