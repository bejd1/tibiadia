import { Box, Typography } from "@mui/material";
import cyclops from "../images/gifs/cyclops.gif";
import demon from "../images/gifs/demon.gif";
import dragon_lord from "../images/gifs/dragon_lord.gif";
import ferumbras from "../images/gifs/ferumbras.gif";
import ghazbaran from "../images/gifs/ghazbaran.gif";
import giant_spider from "../images/gifs/giant_spider.gif";
import rat from "../images/gifs/rat.gif";
import rotworm from "../images/gifs/rotworm.gif";
import snake from "../images/gifs/snake.gif";

export const Loading = () => {
  const gifImages = [
    cyclops,
    demon,
    dragon_lord,
    ferumbras,
    ghazbaran,
    giant_spider,
    rat,
    rotworm,
    snake,
  ];
  const randomIndex = Math.floor(Math.random() * gifImages.length);
  const randomGif = gifImages[randomIndex];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "300px",
        height: "100px",
      }}
    >
      <img src={randomGif} alt={"Gif with " + randomGif} />
      <Typography sx={{ marginTop: "5px", color: "#fff" }}>
        Loading...
      </Typography>
    </Box>
  );
};
