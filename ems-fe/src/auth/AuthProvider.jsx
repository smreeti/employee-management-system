import { createContext, useState, useContext } from "react";
import { loginUser } from "./authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [accessToken, setAccessToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

   const login = async (username, password) => {
        const token = await loginUser(username, password);
        setAccessToken(token);
        setIsAuthenticated(true);
        navigate('/about');
    };

    const logout = async () => {
        setAccessToken(null);
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{
            accessToken,
            isAuthenticated,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);