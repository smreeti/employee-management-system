import { useRef, useState } from "react";
import { ReferencePageWrapper } from "./ReferencesWrapper";

export const UseRefExample = () => {
    const inputRef = useRef(null);
    const renderCount = useRef(0);

    const [text, setText] = useState("");

    // Increment render count on every render
    renderCount.current += 1;

    const focusInput = () => {
        // Focus the input field using ref
        inputRef.current.focus();
    };

    return (
        <ReferencePageWrapper>
            <>
                <h2>useRef Example</h2>

                <p>Render count: {renderCount.current}</p>

                <input
                    ref={inputRef} // attach ref to input
                    type="text"
                    value={text}
                    placeholder="Type something..."
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={focusInput} style={{ marginLeft: "10px" }}>
                    Focus Input
                </button>
            </>
        </ReferencePageWrapper>

    );
};