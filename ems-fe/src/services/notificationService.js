import api from "./axiosInstance";

export const getAllNotifications = () => {
    return api.get("/notifications");
};