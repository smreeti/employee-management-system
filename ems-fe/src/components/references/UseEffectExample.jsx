import { useState, useEffect } from "react";
import { ReferencePageWrapper } from "./ReferencesWrapper";

function UseEffectExample() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`Effect ran. Count is: ${count}`);

        return () => {
            console.log("Cleanup for previous effect");
        };
    }, [count]);

    return (
        <ReferencePageWrapper>
            <div>
                <h2>useEffect Example</h2>
                <h2>Count: {count}</h2>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
            </div>
        </ReferencePageWrapper>
    );
}

export default UseEffectExample;