import { useContext } from 'react';
import { UserContext } from './UserContext';

export const Hello = ({ title }) => {

    const context = useContext(UserContext);
    return (
        <>
            <h2>  {title ? title : "Hello: I am hello page"} </h2>
            <p> {context?.message ? <h3>I am using {context?.message} </h3> : ""}</p>
        </>
    );
}