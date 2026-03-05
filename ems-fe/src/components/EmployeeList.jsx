import { useState, useEffect } from 'react';
import axios from 'axios';

export function EmployeeList() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/employee/fetchAllEmployees')
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <h2>Employee List</h2>
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
                        employees.map(employee => (
                            <tr>
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
