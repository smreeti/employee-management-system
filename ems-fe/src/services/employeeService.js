import api from "./axiosInstance";

export const saveEmployee = (name) => {
    return api.post("/employee", name);
};

export const getAllEmployees = () => {
    return api.get("/employee/fetchAllEmployees");
};

export const searchEmployees = (name) => {
    return api.get("/employee/searchEmployees?name=" + name);
};

export const deleteEmployee = (id) => {
    return api.delete("/employee/deleteEmployee/" + id);
};

