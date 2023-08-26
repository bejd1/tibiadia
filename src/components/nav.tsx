import Online from "./online";
import ShieldIcon from "@mui/icons-material/Shield";
import PhotoIcon from "@mui/icons-material/Photo";
import { FaCrown } from "@react-icons/all-files/fa/FaCrown";
import tibiaLogo from "../images/tibialogo.png";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import NavMenu from "./navMenu";
import "../index.css";

export const Nav = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        marginTop: "10px",
      }}
    >
      <Box>
        <Link to="/tibiadia">
          <Box
            component="img"
            sx={{
              width: "230px",
              height: "130px",
              marginRight: "5px",
              position: "absolute",
              left: "30px",
              top: "7px",
              "@media (max-width: 600px)": {
                width: "180px",
                height: "110px",
              },
              "@media (max-width: 420px)": {
                left: "10px",
                top: "2px",
              },
            }}
            alt="Tibia Icon"
            src={tibiaLogo}
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 992px)": {
            display: "none",
          },
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          mt: "20px",
          marginRight: "40px",
        }}
      >
        <Typography
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PhotoIcon
            style={{
              fontSize: "16px",
              marginRight: "4px",
              color: "#fff",
            }}
          />
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/screenshots"
          >
            Screenshots
          </Link>
        </Typography>
        <Typography style={{ display: "flex", alignItems: "center" }}>
          <FaCrown
            style={{
              fontSize: "16px",
              marginRight: "4px",
              marginBottom: "2px",
              color: "#fff",
            }}
          />
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/highscores"
          >
            Highscores
          </Link>
        </Typography>
        <Typography>
          <ShieldIcon
            style={{
              fontSize: "16px",
              marginRight: "3px",
              color: "#ffff",
            }}
          />
          <Link
            style={{ textDecoration: "none", color: "#fff" }}
            to="/calculator"
          >
            Party shared calculator
          </Link>
        </Typography>
        <Online />
      </Box>
      <Box
        sx={{
          "@media (min-width: 992px)": {
            display: "none",
          },
        }}
      >
        <NavMenu />
      </Box>
    </Box>
  );
};
