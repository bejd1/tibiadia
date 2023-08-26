import React, { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShieldIcon from "@mui/icons-material/Shield";
import { GiPotionBall } from "@react-icons/all-files/gi/GiPotionBall";
import { GiBurningSkull } from "@react-icons/all-files/gi/GiBurningSkull";
import { BiStats } from "@react-icons/all-files/bi/BiStats";
import { Divider } from "@mui/material";
import tibiaComIcon from "../images/tibiaIcon.png";

type CharsT = {
  deaths?: DeathsT[] | null;
  character: CharT;
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

export default function CollapsibleTable({
  characters,
}: {
  characters: CharsT[];
}) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <TableContainer
      component={Paper}
      sx={{ width: "80%", m: "30px 0 50px", backgroundColor: "grey.900" }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                pl: 3,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "15px",
                width: "70px",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "15px",
                width: "70px",
              }}
            >
              Level
            </TableCell>
            <TableCell
              align="right"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "15px",
                width: "70px",
              }}
            >
              Vocation
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: "40px",
                pr: 4,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {characters
            .sort((a, b) => b.character.level - a.character.level)
            .map((character, index) => {
              const vocationDisplay =
                character.character.vocation === "Elite Knight" ||
                character.character.vocation === "Knight"
                  ? "Knight z Vestii"
                  : character.character.vocation;

              const toggleDetails = () => {
                setOpen(!open);
              };

              // level
              const level = character.character.level;
              const minLevel = Math.ceil(level / 1.5);
              const maxLevel = Math.floor(level * 1.5);

              // hp sorc
              const maxHpSorcerer = (level - 8) * 5 + 185;
              // hp druid
              const maxHpDruid = (level - 8) * 5 + 185;
              // hp ek
              const maxHpEk = (level - 8) * 15 + 185;
              // hp rp
              const maxHpRp = (level - 8) * 10 + 185;
              /////////////////////////////
              // mana sorc
              const maxManaSorcerer = (level - 8) * 30 + 90;
              // mana druid
              const maxManaDruid = (level - 8) * 30 + 90;
              // mana ek
              const maxManaEk = (level - 8) * 5 + 90;
              // mana rp
              const maxManaRp = (level - 8) * 15 + 90;

              const professionManaHp = () => {
                if (
                  character.character.vocation === "Elite Knight" ||
                  character.character.vocation === "Knight"
                ) {
                  return (
                    <div>
                      <p>
                        <FavoriteIcon
                          style={{
                            fontSize: "16px",
                            marginBottom: "2px",
                            marginRight: "2px",
                            color: "red",
                          }}
                        />
                        {maxHpEk}
                      </p>
                      <p style={{ display: "flex", flexDirection: "row" }}>
                        <GiPotionBall
                          style={{
                            fontSize: "16px",
                            marginBottom: "2px",
                            marginRight: "2px",
                            color: "#c600c6",
                          }}
                        />
                        {maxManaEk}
                      </p>
                    </div>
                  );
                } else if (
                  character.character.vocation === "Master Sorcerer" ||
                  character.character.vocation === "Sorcerer"
                ) {
                  return (
                    <div>
                      <p>
                        <FavoriteIcon
                          style={{
                            fontSize: "16px",
                            marginBottom: "2px",
                            marginRight: "2px",
                            color: "red",
                          }}
                        />
                        {maxHpSorcerer}
                      </p>
                      <p style={{ display: "flex", flexDirection: "row" }}>
                        <GiPotionBall
                          style={{
                            fontSize: "16px",
                            marginBottom: "3px",
                            marginRight: "2px",
                            color: "#c600c6",
                          }}
                        />
                        {maxManaSorcerer}
                      </p>
                    </div>
                  );
                } else if (
                  character.character.vocation === "Royal Paladin" ||
                  character.character.vocation === "Paladin"
                ) {
                  return (
                    <div>
                      <p>
                        <FavoriteIcon
                          style={{
                            fontSize: "16px",
                            marginBottom: "2px",
                            marginRight: "2px",
                            color: "red",
                          }}
                        />
                        {maxHpRp}
                      </p>
                      <p style={{ display: "flex", flexDirection: "row" }}>
                        <GiPotionBall
                          style={{
                            fontSize: "16px",
                            marginBottom: "3px",
                            marginRight: "2px",
                            color: "#c600c6",
                          }}
                        />
                        {maxManaRp}
                      </p>
                    </div>
                  );
                } else if (
                  character.character.vocation === "Elder Druid" ||
                  character.character.vocation === "Druid"
                ) {
                  return (
                    <div>
                      <p>
                        <FavoriteIcon
                          style={{
                            fontSize: "16px",
                            marginBottom: "2px",
                            marginRight: "2px",
                            color: "red",
                          }}
                        />
                        {maxHpDruid}
                      </p>
                      <p style={{ display: "flex", flexDirection: "row" }}>
                        <GiPotionBall
                          style={{
                            fontSize: "16px",
                            marginBottom: "3px",
                            marginRight: "2px",
                            color: "#c600c6",
                          }}
                        />
                        {maxManaDruid}
                      </p>
                    </div>
                  );
                } else return null;
              };

              return (
                <React.Fragment key={index}>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="columns"
                      sx={{ pl: 3, color: "#fff", width: "70px" }}
                    >
                      <a
                        href={`https://www.tibia.com/community/?name=${character.character.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img
                          src={tibiaComIcon}
                          alt="Tibia Icon"
                          style={{
                            marginRight: "3px",
                            width: "13px",
                            height: "13px",
                          }}
                        />

                        {character.character.name}
                      </a>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: "#fff",
                        width: "70px",
                        paddingRight: "25px",
                      }}
                    >
                      {character.character.level}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "#fff", width: "70px" }}
                    >
                      {vocationDisplay}
                    </TableCell>
                    <TableCell align="right" sx={{ pr: 5 }}>
                      <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => toggleDetails()}
                      >
                        {open ? (
                          <KeyboardArrowUpIcon sx={{ color: "#fff" }} />
                        ) : (
                          <KeyboardArrowDownIcon sx={{ color: "#fff" }} />
                        )}
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  {open && (
                    <TableRow>
                      <TableCell
                        style={{ paddingBottom: 0, paddingTop: 0 }}
                        colSpan={4}
                      >
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box
                            sx={{
                              margin: 1,
                              color: "#fff",
                              display: "flex",
                            }}
                          >
                            <Box sx={{ margin: " 10px" }}>
                              <h4
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "bold",
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  marginRight: "10px",
                                  marginBottom: "2px",
                                }}
                              >
                                <BiStats
                                  style={{
                                    fontSize: "18px",
                                    marginBottom: "2px",
                                  }}
                                />
                                Stats:
                              </h4>
                              <p>{professionManaHp()}</p>
                              <p>
                                <ShieldIcon
                                  style={{
                                    fontSize: "16px",
                                    marginBottom: "2px",
                                    marginRight: "1px",
                                    color: "#fae366",
                                  }}
                                />
                                {minLevel}-{maxLevel}
                              </p>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "10px 0",
                                marginLeft: "60px",
                              }}
                            >
                              {character.deaths &&
                              character.deaths.length > 0 ? (
                                <h4
                                  style={{
                                    fontSize: "15px",
                                    display: "flex",
                                    flexDirection: "row",
                                    fontWeight: "bold",
                                    marginBottom: "2px",
                                  }}
                                >
                                  <GiBurningSkull
                                    style={{
                                      fontSize: "16px",
                                      marginBottom: "2px",
                                      marginRight: "3px",
                                    }}
                                  />
                                  Death:
                                </h4>
                              ) : (
                                ""
                              )}

                              {character.deaths?.map((dead, index) => {
                                const deadTime = dead.time;
                                const newDeadTime = deadTime
                                  .replace("T", " ")
                                  .replace("Z", "");
                                return (
                                  <div key={index}>
                                    <p>Killed by: {dead?.reason}</p>
                                    <p>Data: {newDeadTime}</p>
                                    {character.deaths &&
                                      index !== character.deaths.length - 1 && (
                                        <Divider
                                          sx={{
                                            width: "100%",
                                            bgcolor: "white",
                                            margin: "8px 0",
                                          }}
                                        />
                                      )}
                                  </div>
                                );
                              })}
                            </Box>
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}