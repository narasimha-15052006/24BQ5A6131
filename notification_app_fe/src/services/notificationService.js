import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const TOKEN = import.meta.env.VITE_TOKEN;

console.log("API_URL =", API_URL);
console.log("TOKEN =", TOKEN?.substring(0, 30));

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await axios.get(
      API_URL,
      {
        params: {
          page,
          limit,
          notification_type: type || undefined,
        },
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    return response.data.notifications;
  } catch (error) {
    console.error(error);
    return [];
  }
};