import  { Link, NavLink } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Employee Management System</h2>
            <div className="nav-links">
                <NavLink to="/about" className = {({isActive}) => isActive ? "active" : ""}> About </NavLink>
                <NavLink to="/addEmployee"> Add Employee </NavLink>
                <NavLink to="/employeeList"> View Employees </NavLink>
                <NavLink to="/references"> References </NavLink>
            </div>
        </nav>
    )
}