import api from "./axiosInstance";

export const saveDepartment = (name) => {
    return api.post("/department", name );
};

export const getDepartments = () => {
    return api.get("/departments");
};