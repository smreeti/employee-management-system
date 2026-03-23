import { Link } from "react-router-dom";
import { referencePages } from "./referencePages";

export const References = () => {
    return (
        <>
            <h1>References</h1>
            <nav>
                <ul>
                    {referencePages.map(page => (
                        <li key={page.path}>
                            <Link to={page.path}>{page.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}