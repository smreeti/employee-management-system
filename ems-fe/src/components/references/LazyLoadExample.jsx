import { Suspense, lazy } from "react";
const AboutComponent = lazy(() => import("../About"));

export const LazyLoadExample = () => {
    return (
        <>
            <h2> Lazy Load</h2>
            <Suspense
                fallback={<div>About component is loading please wait...</div>}
            >
                <AboutComponent />
            </Suspense>
        </>
    );
}
