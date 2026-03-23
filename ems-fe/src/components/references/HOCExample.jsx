import { useNavigate } from "react-router-dom";

// HOC that adds a red border around a component
const withBorder = (WrappedComponent) => {
    return function WithBorder(props) {
        return (
            <div style={{ border: "2px solid red", padding: "10px", borderRadius: "5px" }}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

// Simple component that displays a message
const Message = ({ text }) => {
    return <p>{text}</p>;
};

// Wrapped component with border
const MessageWithBorder = withBorder(Message);

export const HOCExample = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/references")}> ⬅ Back to References </button>
            <h3>Simple HOC Example</h3>
            <MessageWithBorder text="Hello, this message has a red border!" />
        </>
    );
};