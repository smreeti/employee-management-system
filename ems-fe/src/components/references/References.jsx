import { Link } from "react-router-dom";

export const References = () => {
    return (
        <>
            <h1>References</h1>
            <nav>
                <ul>
                    <li><Link to="hoc">Higher Order Component</Link></li>
                    <li><Link to="useContext">useContext</Link></li>
                    <li><Link to="useReducer">useReducer</Link></li>
                    <li><Link to="useCallback">useCallback</Link></li>
                    <li><Link to="useMemo">useMemo</Link></li>
                    <li><Link to="redux">Redux</Link></li>
                </ul>
            </nav>
        </>
    )
}