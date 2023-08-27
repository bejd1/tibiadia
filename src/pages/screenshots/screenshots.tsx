import { useEffect, useState } from "react";
import fullscreen from "./fullscreen.png";
import { Box, Divider, Typography } from "@mui/material";
// import { useQuery } from "@tanstack/react-query";
// import glokuNaTarczy from "./glokunatarczy.png";

const Screenshots = () => {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/"
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(photos);

  // const url: string =
  //   "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/";

  // const { data } = useQuery({
  //   queryKey: ["repoData"],
  //   queryFn: () =>
  //     fetch(
  //       "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/"
  //     ).then((res) => res.data),
  // });

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;
  // console.log(data);

  return (
    <Box
      sx={{
        padding: "0 10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "34px",
          marginTop: "70px",
          marginBottom: "2px",
          "@media (max-width: 992px)": {
            marginTop: "90px",
          },
          "@media (max-width: 400px)": {
            fontSize: "28px",
          },
        }}
      >
        Screenshots
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
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: "20px", marginBottom: "10px" }}
        >
          Gloku na tarczy
        </Typography>
        <Typography
          sx={{
            marginBottom: "10px",
            padding: "0 10px",
            fontSize: "14px",
            "@media (max-width: 600px)": {
              fontSize: "12px",
            },
          }}
        >
          Aug 23 2023, 14:13:03 CEST Died at Level 149 by gazer spectre.
        </Typography>
        <Box
          component="img"
          src={fullscreen}
          alt="Tibia Icon"
          sx={{
            maxWidth: "1300px",
            marginBottom: "40px",
            "@media (max-width: 1350px)": {
              width: "90%",
            },
            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Screenshots;
