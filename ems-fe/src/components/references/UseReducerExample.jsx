import { useReducer } from "react"
import { useNavigate } from "react-router-dom";

export const UseReducerExample = () => {
     const navigate = useNavigate();

    const initialState = { count: 0 };

    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 };

            case "DECREMENT":
                return { count: state.count - 1 };

            case "RESET":
                return initialState;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <button onClick={() => navigate("/references")}> ⬅ Back to References </button>
            <h1> useReducer example</h1>
            <p>Count:<b> {state.count}</b> </p>

            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>

    )
}