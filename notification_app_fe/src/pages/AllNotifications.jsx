import { useEffect, useState } from "react";
import { fetchNotifications } from "../services/notificationService";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import { Button } from "@mui/material";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
  }, [type, page]);

  const loadData = async () => {
    const data = await fetchNotifications(
      page,
      10,
      type
    );

    setNotifications(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Notifications</h2>

      <FilterBar setType={setType} />

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}

      <Button
        onClick={() => setPage(page + 1)}
        variant="contained"
      >
        Next Page
      </Button>
    </div>
  );
}

export default AllNotifications;