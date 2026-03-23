import { useState, useEffect } from 'react';
import { deleteEmployee, getAllEmployees, searchEmployees } from '../../services/employeeService';

export function EmployeeList({ refreshFlag  }) {

    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const [errorMsg, setErrorMessage] = useState("");

    useEffect(() => {
        console.log("EmployeeList component mounted");
        fetchAllEmployees();
    }, [refreshFlag]);

    const fetchAllEmployees = async () => {
        const response = await getAllEmployees();

        if (response.data && response.data.length > 0) {
            setEmployees(response.data);
            setErrorMessage("");
        } else {
            // No records found
            setEmployees([]);
            setErrorMessage("No record found");
        }
    }

    const searchEmployee = async (name) => {
        if (!name.trim()) return;

        try {
            const response = await searchEmployees(name);

            if (response.data && response.data.length > 0) {
                setEmployees(response.data);
                setErrorMessage("");
            } else {
                // No records found
                setEmployees([]);
                setErrorMessage("No record found");
            }

        } catch (error) {
            console.log(error);
            setEmployees([]);
            setErrorMessage("No employees found.");
        }
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);

        try {
            fetchAllEmployees();
        } catch(error) {
            setEmployees([]);
            setErrorMessage("Something went wrong");
        }
    }

    return (
        <>
            <h2>Employee List</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search by name" />

            <button onClick={() => searchEmployee(name)}>Search employees</button>
            <button onClick={fetchAllEmployees}>Fetch all employees</button>

            <p>Search value: <b>{name}</b></p>

            {
                errorMsg ? <div className="error-msg">{errorMsg}</div> :

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
                                        <td><button onClick={() => handleDelete(employee.id)}>X</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
            }
        </>
    )
}
