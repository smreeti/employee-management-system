import { NavLink } from 'react-router-dom';
import '../App.css';
import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';

export const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar">
            <NavLink to="/about">Employee Management System</NavLink>
            <div className="nav-links">

                {isAuthenticated && (
                    <>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}> About </NavLink>

                        <div
                            className="nav-dropdown"
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <span className="dropdown-title">Setup</span>

                            {open && (
                                <div className="dropdown-menu">
                                    <NavLink to="/department"> Department</NavLink>
                                    <NavLink to="/employee"> Employee </NavLink>
                                </div>
                            )}
                        </div>

                        <NavLink to="/notifications"> Notifications </NavLink>
                        <NavLink to="/references"> References </NavLink>
                        <button onClick={logout}> Logout </button>
                    </>
                )}

            </div>
        </nav>
    )
}