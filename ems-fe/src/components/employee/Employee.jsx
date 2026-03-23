import { useEffect, useState } from "react";
import { getDepartments } from "../../services/departmentService";
import { saveEmployee } from "../../services/employeeService";
import { EmployeeList } from "./EmployeeList";

export const Employee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        email: "",
        salary: "",
        departmentId: ""
    });

    const [departments, setDepartments] = useState([]);
    const [errorMsg, setErrorMessage] = useState({});
    const [refreshFlag, setRefreshFlag] = useState(false);

    // Load departments for dropdown
    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await getDepartments();
            setDepartments(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            const payload = {
                name: employee.name,
                email: employee.email,
                salary: Number(employee.salary),
                department: {
                    id: employee.departmentId
                }
            };

            await saveEmployee(payload);

            setEmployee({
                name: "",
                email: "",
                salary: "",
                departmentId: ""
            });

            setErrorMessage({});
            setRefreshFlag(prev => !prev); // toggle to trigger fetch all employes
        } catch (error) {
            console.log(error);
            if (error.response && error.response.data && error.response.data.errors) {
                setErrorMessage(error.response.data.errors);
            } else {
                setErrorMessage({ general: "Something went wrong. Please try again." });
            }
        }
    };



    return (
        <>
            <div className="employee-container">
                <h2>Add Employee</h2>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
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
                        type="number"
                        name="salary"
                        value={employee.salary}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="departmentId">Department:</label>
                    <select
                        name="departmentId"
                        value={employee.departmentId}
                        onChange={handleChange}
                    >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                            <option key={dept.id} value={dept.id}>
                                {dept.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button className="submit-btn" onClick={handleSubmit}>
                    Submit
                </button>
            </div>

            <EmployeeList refreshFlag={refreshFlag} />
        </>
    );
};