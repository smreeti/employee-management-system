import { useState, useEffect } from 'react';
import { deleteEmployee, getAllEmployees, searchEmployees } from '../../services/employeeService';

export const EmployeeList = ({ refreshFlag, onEdit }) => {
    const [employees, setEmployees] = useState([]);
    const [name, setName] = useState("");
    const [errorMsg, setErrorMessage] = useState("");

    useEffect(() => { fetchAllEmployees(); }, [refreshFlag]);

    const fetchAllEmployees = async () => {
        setName('');
        try {
            const response = await getAllEmployees();
            if (response.data.length > 0) {
                setEmployees(response.data);
                setErrorMessage("");
            } else {
                setEmployees([]);
                setErrorMessage("No records found");
            }
        } catch {
            setEmployees([]);
            setErrorMessage("Failed to fetch employees");
        }
    };

    const searchEmployee = async (name) => {
        if (!name.trim()) return;
        try {
            const response = await searchEmployees(name);
            if (response.data.length > 0) {
                setEmployees(response.data);
                setErrorMessage("");
            } else {
                setEmployees([]);
                setErrorMessage("No records found");
            }
        } catch {
            setEmployees([]);
            setErrorMessage("No records found");
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteEmployee(id);
            fetchAllEmployees();
        } catch {
            setErrorMessage("Delete failed");
        }
    };

    return (
        <div className="employee-list">
            <h2>Employee List</h2>

            <div className="search-section">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Search by name"
                />
                <button onClick={() => searchEmployee(name)}>Search</button>
                <button onClick={fetchAllEmployees}>Reset</button>
            </div>

            {errorMsg ? (
                <div className="error-msg">{errorMsg}</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.name}</td>
                                <td>{emp.email}</td>
                                <td>{emp.department.name}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <button onClick={() => onEdit(emp)}>Edit</button>
                                    <button onClick={() => handleDelete(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}