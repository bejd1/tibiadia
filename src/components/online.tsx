import { useEffect, useState } from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box, CircularProgress, Typography } from "@mui/material";

type OnlineT = {
  worlds: {
    world: InfoT;
  };
};

type InfoT = {
  name: string;
  status: string;
  players_online: number;
};

const Online = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [online, setOnline] = useState<OnlineT>({
    worlds: {
      world: {
        name: "",
        status: "",
        players_online: 0,
      },
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.tibiadata.com/v3/world/dia");
        const data = await response.json();
        setIsLoading(false);
        setOnline(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      style={{
        background: "#1d2124",
        padding: "0",
        margin: "0",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isLoading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography style={{ marginRight: "5px", margin: 0, padding: 0 }}>
              Players Online:
            </Typography>
            <CircularProgress size={20} />
          </Box>
        ) : (
          <Typography
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "16px",
            }}
          >
            Players Online: {online.worlds.world.players_online}
            {online.worlds.world.status === "online" ? (
              <FiberManualRecordIcon style={{ color: "green" }} />
            ) : (
              <FiberManualRecordIcon style={{ color: "red" }} />
            )}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Online;
