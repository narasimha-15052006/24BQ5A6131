import { Card, CardContent, Typography } from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5">
          {notification.Type}
        </Typography>

        <Typography sx={{ mt: 1 }}>
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;