import { Box, CircularProgress, Typography } from "@mui/material";

export const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <CircularProgress />
      <Typography sx={{ marginTop: "5px", color: "#fff" }}>
        Loading...
      </Typography>
    </Box>
  );
};
