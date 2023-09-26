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
    deaths?: Death[];
  };
}

export const Table = (characters: CharacterData) => {
  return (
    <>
      {/* {characters.map((char) => {
        return <div></div>;
      })} */}
    </>
  );
};
