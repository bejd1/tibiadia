import { Box, Typography } from "@mui/material";
import cyclops from "../gifs/cyclops.gif";
import demon from "../gifs/demon.gif";
import dragon_lord from "../gifs/dragon_lord.gif";
import ferumbras from "../gifs/ferumbras.gif";
import ghazbaran from "../gifs/ghazbaran.gif";
import giant_spider from "../gifs/giant_spider.gif";
import rat from "../gifs/rat.gif";
import rotworm from "../gifs/rotworm.gif";
import snake from "../gifs/snake.gif";

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
