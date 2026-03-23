import React from "react";

export const Button = React.memo(({ onClick, text }) => {
    console.log(`${text} button rendered`);
    return <button onClick={onClick}>{text}</button>;
});