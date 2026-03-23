import { useState, useEffect } from "react";
import { ReferencePageWrapper } from "./ReferencesWrapper";

const useWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}

export const CustomHooksExample = () => {
    const width = useWidth();
    return <ReferencePageWrapper><h2>Window Width: {width}px</h2> </ReferencePageWrapper>;
}