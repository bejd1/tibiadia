import { useEffect, useState } from "react";
import fullscreen from "./fullscreen.png";
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
    <div>
      <h1
        style={{
          fontSize: "34px",
          marginBottom: "20px",
          marginTop: "60px",
          fontWeight: "bold",
        }}
      >
        Photos
      </h1>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "25px", marginBottom: "10px" }}>
          Gloku na tarczy
        </h2>
        <p style={{ marginBottom: "10px" }}>
          Aug 23 2023, 14:13:03 CEST Died at Level 149 by gazer spectre.
        </p>
        <img
          src={fullscreen}
          alt="Tibia Icon"
          style={{
            maxWidth: "1300px",
            marginBottom: "40px",
          }}
        />
      </div>
    </div>
  );
};

export default Screenshots;
