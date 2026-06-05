import { Button, Stack } from "@mui/material";

function FilterBar({ setType }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ mb: 3 }}
    >
      <Button
        variant="contained"
        onClick={() => setType("")}
      >
        All
      </Button>

      <Button
        variant="contained"
        onClick={() => setType("Event")}
      >
        Event
      </Button>

      <Button
        variant="contained"
        onClick={() => setType("Result")}
      >
        Result
      </Button>

      <Button
        variant="contained"
        onClick={() => setType("Placement")}
      >
        Placement
      </Button>
    </Stack>
  );
}

export default FilterBar;