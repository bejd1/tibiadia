import { useQuery } from "react-query";
import { Loading } from "../../components/loading";
import CollapsibleTable from "../../components/table";
import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

type CharsT = {
  deaths?: DeathsT[] | null;
  character: CharT;
  isLoading: boolean;
};

type CharT = {
  name: string;
  level: number;
  vocation: string;
};

type DeathsT = {
  reason: string;
  time: string;
  level: number;
};

type NamesT = {
  name: string;
};

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<CharsT[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { data: nickNames } = useQuery<NamesT[]>("screens", async () => {
    const response = await axios.get<NamesT[]>(
      "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/chars.json"
    );
    return response.data;
  });

  useEffect(() => {
    const fetchCharactersWithDelay = async () => {
      try {
        if (nickNames) {
          setTimeout(async () => {
            const characterPromises = nickNames.map(async (name) => {
              try {
                const response = await fetch(
                  `https://api.tibiadata.com/v3/character/${name.name}`
                );
                const data = await response.json();
                setIsLoading(false);
                return data.characters;
              } catch (error) {
                console.error(`Error fetching character ${name}:`, error);
                return null;
              }
            });

            const charactersData = await Promise.all(characterPromises);
            setCharacters(charactersData.filter((data) => data !== null));
          }, 1000);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharactersWithDelay();
  }, [nickNames]);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
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
        Characters
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
      <Box></Box>
      <CollapsibleTable characters={characters} />
      {isLoading && (
        <Box
          sx={{
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            borderRadius: "10px",
            maxWidth: "600px",
            bgcolor: "#212121",
            p: 3,
          }}
        >
          <Loading />
        </Box>
      )}
    </Box>
  );
};

export default Characters;
