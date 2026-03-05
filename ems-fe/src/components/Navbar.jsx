import  { Link, NavLink } from 'react-router-dom';
import '../App.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Employee Management System</h1>
            <>
                <NavLink to="/about" className = {({isActive}) => isActive ? "active" : ""}> About </NavLink>
                <NavLink to="/addEmployee"> Add Employee </NavLink>
                <NavLink to="/employeeList"> View Employees </NavLink>
              
            </>
        </nav>
    )
}