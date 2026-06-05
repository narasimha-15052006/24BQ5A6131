import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notificationService";
import { prioritySort } from "../utils/prioritySort";
import NotificationCard from "../components/NotificationCard";

function PriorityInbox() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await fetchNotifications(1, 10);

    setNotifications(
      prioritySort(data).slice(0, 10)
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Priority Inbox</h2>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}
    </div>
  );
}

export default PriorityInbox;