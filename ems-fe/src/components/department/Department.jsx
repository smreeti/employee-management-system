import { useEffect, useState } from "react";
import { getDepartments, saveDepartment } from "../../services/departmentService";

export const Department = () => {
    const [name, setName] = useState("");
    const [departments, setDepartments] = useState([]);

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

    const handleSubmit = async () => {
        if (!name.trim()) return;

        try {
            await saveDepartment({ name });
            setName("");
            fetchDepartments();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h2>Add Department</h2>

            <div style={{ marginBottom: "15px" }}>
                <input
                    type="text"
                    name="departmentName"
                    value={name}
                    placeholder="Enter department name"
                    onChange={(e) => setName(e.target.value)}
                />

                <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
                    Submit
                </button>
            </div>

            {departments.length > 0 && (
                <div>
                    <h3>Departments</h3>

                    <ul>
                        {departments.map((dept) => (
                            <li key={dept.id || dept.name}>
                                {dept.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};