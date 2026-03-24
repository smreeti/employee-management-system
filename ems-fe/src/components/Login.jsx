import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Link } from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { login } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await login(username, password);
        } catch (err) {
            setError("Invalid username or password");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="login-container">

                <div className="form-group">
                    <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}

                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Register</Link>
                </p>
            </div>
        </form>

    );
}

export default Login;