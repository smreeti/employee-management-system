import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Create context with default value (optional)
const UserContext = createContext({
    user: null,
    setUser: () => { }
});

// Provider component to wrap your app or part of it
const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => setUser({ name: "Smriti", email: "smriti@example.com" });
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// A child component that consumes the context
const UserProfile = () => {
    const { user, login, logout } = useContext(UserContext);

    if (!user) {
        return (
            <div>
                <p>No user logged in.</p>
                <button onClick={login}>Log In</button>
            </div>
        );
    }

    return (
        <div>
            <p>
                Logged in as <b>{user.name}</b> ({user.email})
            </p>
            <button onClick={logout}>Log Out</button>
        </div>
    );
};

// Example component showing usage
export const UseContextExample = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/references")}> ⬅ Back to References </button>
            <UserProvider>
                <h1>useContext Example</h1>
                <UserProfile />
            </UserProvider>
        </>
    );
};