import { useQuery } from "@tanstack/react-query";
import { fetchEmployees } from "../../services/employeeService";

export const TanStackQuery = () => {
    const { data: employees, isPending } = useQuery({
        queryKey: ['employees'],
        queryFn: fetchEmployees
    });

    if (isPending) {
        console.log('pending');
        return <p>Loading...</p>;
    }

    return (
        <div className="employee-list">
            <h2>Employee List</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {employees?.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.department.name}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}