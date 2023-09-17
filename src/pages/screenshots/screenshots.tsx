import { Box, Divider, Typography } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import { Loading } from "../../components/loading";
import { useState } from "react";
import { v4 } from "uuid";
import NestedModal from "../../components/modal";

interface Todo {
  author?: string;
  description?: string;
  url?: string;
  title?: string;
  date: string;
  id?: string | undefined;
}

const Screenshots = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [author, setAuthor] = useState("");

  const dateObject = new Date();
  const date = dateObject.toLocaleString("en-US", { timeZone: "CET" });

  const addNewPost = () => {
    const postId = v4();
    const newPost = {
      id: postId,
      title: title,
      description: description,
      author: author,
      url: url,
      date: date,
    };
    axios
      .post(
        `https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/screenshots.json`,
        newPost
      )
      .then((response) => {
        setTimeout(() => {
          setAuthor("");
          setTitle("");
          setDescription("");
          setUrl("");
        }, 2000);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding new post:", error);
      });
  };

  const {
    isLoading,
    error,
    data: screenshots,
  } = useQuery<Todo[]>("screens", () =>
    axios
      .get<Record<string, Todo>>(
        "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/screenshots.json"
      )
      .then((res) => {
        const data = res.data;

        // Ensure data is an object
        if (typeof data !== "object" || data === null) {
          throw new Error("Data is not an object");
        }

        // Convert the object into an array with IDs as keys
        const screenshotsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        return screenshotsArray;
      })
  );

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            bgcolor: "#212121",
            borderRadius: "10px",
            padding: "25px",
          }}
        >
          <Loading />
        </Box>
      </Box>
    );

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            bgcolor: "#212121",
            borderRadius: "10px",
            padding: "25px",
          }}
        >
          <Typography>Somethink went wrong 😒</Typography>
        </Box>
      </Box>
    );

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

      {screenshots?.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "white" }}>No screenshots</p>
        </div>
      ) : (
        screenshots
          ?.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          ?.map((screenshot, index) => {
            return (
              <Box
                key={index}
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "24px",
                    marginBottom: "10px",
                    "@media (max-width: 600px)": {
                      fontSize: "18px",
                    },
                  }}
                >
                  {screenshot.title?.toUpperCase()}
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "10px",
                    padding: "0 10px",
                    fontSize: "16px",
                    "@media (max-width: 600px)": {
                      fontSize: "13px",
                    },
                  }}
                >
                  {screenshot.description}
                </Typography>
                <Box
                  component="img"
                  src={screenshot.url}
                  alt={screenshot.title}
                  sx={{
                    maxWidth: "1300px",
                    marginBottom: "50px",
                    "@media (max-width: 1350px)": {
                      width: "90%",
                    },
                    "@media (max-width: 600px)": {
                      width: "100%",
                    },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    right: "10px",
                    bottom: "25px",
                    marginBottom: "30px",
                  }}
                >
                  <Typography sx={{ fontSize: "12px" }}>
                    {screenshot.author} {screenshot.date}
                  </Typography>
                </Box>
                {screenshots.length && index !== screenshots.length - 1 && (
                  <Divider
                    sx={{
                      width: "70vw",
                      bgcolor: "white",
                      margin: "20px 0",
                    }}
                  />
                )}
              </Box>
            );
          })
      )}
      <Box sx={{ position: "fixed", bottom: "30px", right: "30px" }}>
        <NestedModal
          addNewPost={addNewPost}
          title={title}
          description={description}
          url={url}
          author={author}
          setTitle={setTitle}
          setDescription={setDescription}
          setUrl={setUrl}
          setAuthor={setAuthor}
        />
      </Box>
    </Box>
  );
};

export default Screenshots;
