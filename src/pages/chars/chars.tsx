import { useQuery } from "react-query";
import { Box, Divider, Typography } from "@mui/material";
import axios from "axios";
import CollapsibleTable from "../../components/table";

interface Character {
  name: string;
  level: number;
  vocation: string;
}
interface Death {
  reason?: string;
  time?: string;
  level?: number;
}

interface CharacterData {
  characters: {
    character: Character;
    deaths: Death[];
  };
}

const Characters = () => {
  const names = [
    "Lezi",
    "Lucky Miken",
    "pan voldes",
    "karmazzin",
    "cuprra",
    "arek od samarek",
    "lucznik zohan",
    "dia soraka",
    "ivanienko dobry druid",
    "Diewuj",
    "Elon Skyllir",
    "cashir marienn",
    "Holistyk",
  ];

  const fetchCharacterData = async (name: string) => {
    const url = `https://api.tibiadata.com/v3/character/${name}`;
    const response = await axios.get<CharacterData>(url);
    return response.data.characters;
  };

  const {
    data: characters,
    isLoading,
    isError,
  } = useQuery("characterData", () =>
    Promise.all(names.map((name) => fetchCharacterData(name)))
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

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
          fontSize: "45px",
          marginBottom: "2px",
          marginTop: "70px",
          "@media (max-width: 400px)": {
            fontSize: "28px",
          },
        }}
      >
        Hall of fame
      </Typography>
      <Divider
        sx={{
          width: "10%",
          bgcolor: "#fff",
          marginBottom: "30px",
          height: "0.5px",
          "@media (max-width: 600px)": {
            width: "20%",
            marginBottom: "20px",
          },
        }}
      />

      <CollapsibleTable characters={characters} />
    </Box>
  );
};

export default Characters;
