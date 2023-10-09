import React from "react";

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

interface TableProps {
  characters?: {
    character: Character;
    deaths: Death[];
  }[];
}

const Table: React.FC<TableProps> = ({ characters = [] }) => {
  return (
    <>
      {characters.map((char) => {
        const { character, deaths } = char;
        const { name, level, vocation } = character;

        return (
          <div key={level}>
            <p>{name}</p>
            <p>{level}</p>
            <>{vocation}</>
            <>
              {deaths?.map((d) => {
                const { level, reason } = d;
                return (
                  <div key={level}>
                    {reason}
                    {level}
                  </div>
                );
              })}
            </>
          </div>
        );
      })}
    </>
  );
};

export default Table;
