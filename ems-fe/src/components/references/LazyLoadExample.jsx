import { Suspense, lazy } from "react";
import { ReferencePageWrapper } from "./ReferencesWrapper";
const AboutComponent = lazy(() => import("../About"));

export const LazyLoadExample = () => {
    return (
        <ReferencePageWrapper>
            <h2> Lazy Load Example by showing fallback and About content</h2>
            <Suspense
                fallback={<div>About component is loading please wait...</div>}
            >
                <AboutComponent />
            </Suspense>
        </ReferencePageWrapper>
    );
}
