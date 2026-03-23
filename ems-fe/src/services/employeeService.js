import api from "./axiosInstance";

export const saveEmployee = (payload) => {
    return api.post("/employee", payload);
};

export const updateEmployee = (payload) => {
    return api.put("/employee", payload);
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

