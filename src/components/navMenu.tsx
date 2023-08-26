import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Online from "./online";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import ShieldIcon from "@mui/icons-material/Shield";
import PhotoIcon from "@mui/icons-material/Photo";
import { FaCrown } from "@react-icons/all-files/fa/FaCrown";

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        "&:hover": { background: "#1d2124", color: "#ccc" },
        marginTop: "10px",
        marginRight: "25px",
        "@media (max-width: 600px)": {
          marginRight: "5px",
          marginTop: "-5px",
        },
      }}
    >
      <Button onClick={handleClick}>
        <MenuIcon
          sx={{
            fontSize: "32px",
            cursor: "pointer",
            color: "#fff",
          }}
        />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { background: "#1d2124", border: "1px solid #1d2124" },
        }}
        sx={{ marginTop: "8px" }}
      >
        <Box
          sx={{
            color: "#fff",
            textDecoration: "none",
            padding: "10px",
            width: "100%",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          <Online />
        </Box>
        <Divider sx={{ background: "#fff" }} />
        <Box
          sx={{
            color: "#fff",
            textDecoration: "none",
            padding: "10px",
            paddingLeft: "5px",
            width: "100%",
            textAlign: "left",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClose}
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
        </Box>
        <Divider sx={{ background: "#fff" }} />
        <Box
          sx={{
            color: "#fff",
            textDecoration: "none",
            padding: "10px",
            paddingLeft: "5px",
            width: "100%",
            textAlign: "left",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
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
        </Box>
        <Divider sx={{ background: "#fff" }} />
        <Box
          sx={{
            color: "#fff",
            textDecoration: "none",
            padding: "10px",
            paddingLeft: "5px",
            width: "100%",
            textAlign: "left",
            marginLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleClose}
        >
          <ShieldIcon
            style={{
              fontSize: "16px",
              marginRight: "3px",
              color: "#ffff",
            }}
          />
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            to="/calculator"
          >
            Party shared calculator
          </Link>
        </Box>
      </Menu>
    </Box>
  );
}
