import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../auth/authService";

export const Signup = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        password: '',
        role: ''
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await signUpUser(user);
            navigate('/');
        } catch (error) {
            if (error.response?.data?.errors) {
                setError(error.response.data.errors);
            } else {
                setError({ general: "Something went wrong. Please try again." });
            }
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <div className="login-container">

                <div className="form-group">
                    <input placeholder="Username" name="username" value={user.username} onChange={handleChange} />
                    {error?.username && <p className="field-error">{error.username}</p>}
                </div>

                <div className="form-group">
                    <input placeholder="Password" type="password" name="password" value={user.password} onChange={handleChange} />
                    {error?.password && <p className="field-error">{error.password}</p>}
                </div>

                <div className="form-group">
                    <input placeholder="Role" type="text" name="role" value={user.role} onChange={handleChange} />
                    {error?.role && <p className="field-error">{error.role}</p>}
                </div>

                <button type="submit">Register</button>
                {error && <p style={{ color: "red" }}>{error.general}</p>}

                <p className="signup-link">
                    Already have an account? <Link to="/">Login</Link>
                </p>
            </div>
        </form>

    );
}
