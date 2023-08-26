import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import tibiaComIcon from "../../images/tibiaIcon.png";
import { Loading } from "../../components/loading";

type HighScoreT = {
  highscores: HighScoreTTT;
};

type HighScoreTTT = {
  world: string;
  highscore_list: HighScoreTT[];
};

type HighScoreTT = {
  rank: number;
  name: string;
  vocation: string;
  level: number;
};

const HighScores = () => {
  const [highScores, setHighScores] = useState<HighScoreT | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.tibiadata.com/v3/highscores/dia/experience/all/1"
        );
        const data = await response.json();
        setHighScores(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "20px", marginTop: "60px" }}>
        HighScore
      </h1>
      <Box
        sx={{
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          borderRadius: "10px",
          maxWidth: "600px",
          bgcolor: "#212121",
          p: 3,
        }}
      >
        {highScores ? (
          highScores.highscores.highscore_list
            .slice(0, 5)
            .map((player, index) => (
              <Box key={index} sx={{ display: "flex", marginBottom: "2px" }}>
                <p style={{ fontWeight: "bold", marginRight: "3px" }}>
                  {player.rank}.{" "}
                </p>
                <a
                  href={`https://www.tibia.com/community/?name=${player.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <img
                    src={tibiaComIcon}
                    alt="Tibia Icon"
                    style={{
                      marginRight: "3px",
                      width: "13px",
                      height: "13px",
                    }}
                  />

                  {player.name}
                </a>
                <p style={{ marginRight: "3px" }}>
                  , Vocation: {player.vocation},{" "}
                </p>
                <p>
                  Level:
                  {" " + player.level}
                </p>
              </Box>
            ))
        ) : (
          <Loading />
        )}
      </Box>
    </div>
  );
};

export default HighScores;
