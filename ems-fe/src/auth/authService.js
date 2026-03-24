import api from "../services/axiosInstance";
import { setAccessToken } from "./authToken";

export const loginUser = async (username, password) => {
    try {
        const res = await api.post("/auth/login", { username, password });
        const accessToken = res.data;
        setAccessToken(accessToken); // store in memory
        return accessToken;
    } catch (err) {
        console.error("Login failed", err);
        throw err;
    }
};