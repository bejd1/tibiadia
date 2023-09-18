import { useEffect, useState } from "react";
import tibiaComIcon from "../../images/tibiaIcon.png";
import { Loading } from "../../components/loading";
import { Box, Divider, Link, Pagination, Typography } from "@mui/material";
import usePagination from "../../components/pagination";

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
  vocationAbbreviation: string;
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

  const PER_PAGE: number = 10;

  const _DATA = usePagination(
    highScores?.highscores.highscore_list || [],
    PER_PAGE
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 10px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "34px",
          marginBottom: "2px",
          marginTop: "70px",
          "@media (max-width: 400px)": {
            fontSize: "28px",
          },
        }}
      >
        HighScore
      </Typography>
      <Divider
        sx={{
          width: "10%",
          bgcolor: "#fff",
          marginBottom: "20px",
          height: "0.5px",
          "@media (max-width: 600px)": {
            width: "20%",
          },
        }}
      />

      <Box
        sx={{
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          borderRadius: "10px",
          bgcolor: "#212121",
          padding: "25px",
          "@media (max-width: 600px)": {
            padding: "15px",
          },
        }}
      >
        {highScores ? (
          _DATA.currentData().map((player, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  marginBottom: "2px",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginRight: "3px",
                    fontSize: "14px",
                  }}
                >
                  {player.rank}.{" "}
                </Typography>
                <Link
                  href={`https://www.tibia.com/community/?name=${player.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    justifyContent: "left",
                    textDecoration: "none",
                    color: "#fff",
                    fontFamily: "Roboto, sans-serif",
                    marginRight: "5px",
                    "@media (max-width: 400px)": {
                      fontSize: "13px",
                      width: "100%",
                    },
                  }}
                >
                  <img
                    src={tibiaComIcon}
                    alt="Tibia Icon"
                    style={{
                      marginRight: "3px",
                      width: "15px",
                      height: "15px",
                    }}
                  />
                  {player.name + ","}
                </Link>
                <Typography
                  sx={{
                    marginRight: "3px",
                    "@media (max-width: 600px)": {
                      display: "none",
                    },
                  }}
                >
                  Vocation: {player.vocation},
                </Typography>

                <Typography
                  sx={{
                    "@media (max-width: 400px)": {
                      fontSize: "13px",
                    },
                  }}
                >
                  Level:
                  {" " + player.level}
                </Typography>
              </Box>
            );
          })
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loading />
          </Box>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", mt: "20px" }}>
          <Pagination
            count={_DATA.maxPage}
            page={_DATA.currentPage}
            variant="outlined"
            shape="rounded"
            onChange={(e, page) => _DATA.jump(page)}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white",
              },
              "& .MuiPaginationItem-page.Mui-selected": {
                backgroundColor: "#1a1a1c",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HighScores;
