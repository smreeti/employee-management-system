import { useEffect, useState } from "react";
import { getAllNotifications } from "../services/notificationService";

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);

    const fetchNotifications = async () => {
        try {
            const res = await getAllNotifications();
            setNotifications(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchNotifications();
        const interval = setInterval(fetchNotifications, 5000); // Poll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((n) => (
                    <li key={n.id}>
                        <span>{n.notification}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationList;