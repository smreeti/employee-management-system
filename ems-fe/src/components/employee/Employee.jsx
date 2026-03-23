import { useEffect, useState } from "react";
import { getDepartments } from "../../services/departmentService";
import { saveEmployee, updateEmployee } from "../../services/employeeService";

export const Employee = ({ editEmployee, onSuccess, clearEdit }) => {
    const [employee, setEmployee] = useState({
        id: "",
        name: "",
        email: "",
        salary: "",
        departmentId: ""
    });

    const [departments, setDepartments] = useState([]);
    const [errorMsg, setErrorMessage] = useState({});

    // Load departments
    useEffect(() => { fetchDepartments(); }, []);

    // Populate form when editing
    useEffect(() => {
        if (editEmployee) {
            setEmployee({
                id: editEmployee.id,
                name: editEmployee.name,
                email: editEmployee.email,
                salary: editEmployee.salary,
                departmentId: editEmployee.department?.id || ""
            });
            setErrorMessage({});
        }
    }, [editEmployee]);

    const fetchDepartments = async () => {
        try {
            const response = await getDepartments();
            setDepartments(response.data);
        } catch (error) { console.log(error); }
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const payload = {
                id: employee.id,
                name: employee.name,
                email: employee.email,
                salary: Number(employee.salary),
                departmentId: employee.departmentId
            };

            if (employee.id) {
                await updateEmployee(payload);
                clearEdit(); // clear editing state
            } else {
                await saveEmployee(payload);
            }

            setEmployee({ id: "", name: "", email: "", salary: "", departmentId: "" });
            setErrorMessage({});
            onSuccess(); // refresh EmployeeList
            alert(`Employee ${employee.id ? "updated" : "added"} successfully!`);

        } catch (error) {
            if (error.response?.data?.errors) {
                setErrorMessage(error.response.data.errors);
            } else {
                setErrorMessage({ general: "Something went wrong. Please try again." });
            }
        }
    };

    return (
        <div className="employee-form">
            <h2>{employee.id ? "Update Employee" : "Add Employee"}</h2>

            {errorMsg.general && <div className="error-msg">{errorMsg.general}</div>}

            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={employee.name}
                    onChange={handleChange}
                />
                {errorMsg?.name && <p className="field-error">{errorMsg.name}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                />
                {errorMsg?.email && <p className="field-error">{errorMsg.email}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="salary">Salary:</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={employee.salary}
                    onChange={handleChange}
                />
                {errorMsg?.salary && <p className="field-error">{errorMsg.salary}</p>}
            </div>

            <div className="form-group">
                <label htmlFor="departmentId">Department:</label>
                <select
                    name="departmentId"
                    value={employee.departmentId}
                    onChange={handleChange}
                >
                    <option value="">Select Department</option>
                    {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                </select>
                {errorMsg?.departmentId && <p className="field-error">{errorMsg.departmentId}</p>}
            </div>

            <button className="submit-btn" onClick={handleSubmit}>
                {employee.id ? "Update" : "Add"}
            </button>
        </div>
    );
};