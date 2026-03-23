import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export function EmployeeList() {

    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("EmployeeList component mounted");
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

            <p>Search value: {name}</p>

            {
                employees.length === 0 ? <p> No records</p> :

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
            }
        </>
    )
}
