import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useState } from "react";

const SharedCalculator = () => {
  const [counter, setCounter] = useState<number>(0);
  const [firstNum, setFirstNum] = useState<number | string>("");
  const [secondNum, setSecondNum] = useState<number | string>("");
  const [showText, setShowText] = useState(false);

  const setNewNum = (e: React.FormEvent) => {
    e.preventDefault();

    const secondNumValue = Math.ceil(counter / 1.5);
    const firstNumValue = Math.floor(counter * 1.5);

    setFirstNum(firstNumValue.toFixed(0));
    setSecondNum(secondNumValue.toFixed(0));
  };

  return (
    <Box
      sx={{
        marginBottom: "33px",
        padding: "0 20px",
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
        Shared calculator
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
      <Box>
        <form onSubmit={setNewNum}>
          <input
            style={{
              color: "black",
              height: "27px",
              paddingLeft: "5px",
              fontSize: "16px",
            }}
            type="number"
            value={counter}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCounter(parseInt(e.target.value))
            }
          />
          <Button
            sx={{
              backgroundColor: "lime",
              color: "white",
              border: "none",
              padding: "3px 10px",
              borderRadius: "6px",
              fontSize: "15px",
              cursor: "pointer",
              letterSpacing: "0.3px",
              marginLeft: "10px",
              "@media (max-width: 340px)": {
                marginTop: "10px",
                marginLeft: "0",
                width: "70%",
              },
              "&:hover": { backgroundColor: "#03b303" },
            }}
            type="submit"
            onClick={() => setShowText(true)}
          >
            Submit
          </Button>
        </form>
      </Box>
      {showText ? (
        <Typography
          sx={{
            padding: "0 20px",
            marginTop: "20px",
          }}
        >
          A character with level can share experience with levels {secondNum} to{" "}
          {firstNum}.
        </Typography>
      ) : (
        " "
      )}
    </Box>
  );
};

export default SharedCalculator;
