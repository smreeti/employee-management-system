import { useState } from "react";
import { Employee } from "./Employee";
import { EmployeeList } from "./EmployeeList";

export const EmployeePage = () => {
    const [editEmployee, setEditEmployee] = useState(null);
    const [refreshFlag, setRefreshFlag] = useState(false);

    // Trigger EmployeeList refresh
    const refreshEmployees = () => setRefreshFlag(prev => !prev);

    // Handle edit button click
    const handleEdit = (employee) => {
        setEditEmployee(employee);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="employee-page">
            <Employee
                editEmployee={editEmployee}
                onSuccess={refreshEmployees}
                clearEdit={() => setEditEmployee(null)}
            />
            <EmployeeList
                refreshFlag={refreshFlag}
                onEdit={handleEdit}
            />
        </div>
    );
};