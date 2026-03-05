import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const previousInputValue  = useRef("");

    useEffect(() => {
        console.log("EmployeeList component mounted");
        previousInputValue.current = name;
    }, [name]);

    const handleOnClick = () => {
        axios.get('http://localhost:8080/api/employee/fetchAllEmployees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => console.log(error));
    }

    const searchEmployee = (name) => {
        axios.get(`http://localhost:8080/api/employee/searchEmployees?name=${name}`)
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <h2>Employee List</h2>
            <button onClick={handleOnClick}>Fetch employees</button>
            <button onClick={() => searchEmployee(name)}>Search employees</button>

            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search by name" />

            <p>Current value: {name}</p>
            <p>Previous Value: {previousInputValue.current}</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Project</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.length === 0 ? <tr> No records</tr> :
                            employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.projectNames}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </>
    )
}
