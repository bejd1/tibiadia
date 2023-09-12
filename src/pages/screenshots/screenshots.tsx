import { Box, Divider, Typography } from "@mui/material";
// import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Loading } from "../../components/loading";
// import { useState } from "react";
// import NestedModal from "../../components/modal";
// import { v4 as uuidv4 } from "uuid";

interface Todo {
  author?: string;
  describe: string;
  img: string;
  title: string;
  date: string;
}

interface PostI {
  id?: string;
  title: string;
  describe: string;
  url: string;
  date: string;
}

const Screenshots = () => {
  // const [title, setTitle] = useState("");
  // const [describe, setDescribe] = useState("");
  // const [url, setUrl] = useState("");
  // const dateObject = new Date();
  // const date = dateObject.toLocaleString("en-US", { timeZone: "CET" });

  const {
    isLoading,
    error,
    data: screenshots,
  } = useQuery<Todo[]>("screens", () =>
    axios
      .get<Todo[]>(
        "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/screenshots.json"
      )
      .then((res) => res.data)
  );

  const mutation = useMutation((newTodo: PostI) => {
    return axios.post<Todo[]>(
      "https://tibiadia-default-rtdb.europe-west1.firebasedatabase.app/screenshots.json",
      newTodo
    );
  });

  // const mutation = useMutation({
  //   mutationFn: (newTodo) => {
  //     return axios.post<Todo[]>('/todos', newTodo)
  //   },
  // })

  // console.log(screenshots);

  // const createPost = mutation.mutate({
  //   // id: uuidv4(),
  //   title: title,
  //   describe: describe,
  //   url: url,
  //   date: date,
  // });

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

  console.log(mutation);

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

      {screenshots
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
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: "20px",
                  marginBottom: "10px",
                  "@media (max-width: 600px)": {
                    fontSize: "14px",
                  },
                }}
              >
                {screenshot.title}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "10px",
                  padding: "0 10px",
                  fontSize: "18px",
                  "@media (max-width: 600px)": {
                    fontSize: "12px",
                  },
                }}
              >
                {screenshot.describe}
              </Typography>
              {/* <Typography
              variant="h4"
              sx={{ fontSize: "11px", marginBottom: "10px" }}
            >
              {todo.author}
            </Typography> */}
              <Box
                component="img"
                src={screenshot.img}
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
              {screenshots.length && index !== screenshots.length - 1 && (
                <Divider
                  sx={{
                    width: "100%",
                    bgcolor: "white",
                    margin: "20px 0",
                  }}
                />
              )}
              {/* <Box
                sx={{
                  position: "fixed",
                  right: "25px",
                  bottom: "25px",
                  bgcolor: "grey",
                }}
              >
                <TextField
                  placeholder="TITLE"
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ mb: "10px" }}
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
                <TextField
                  placeholder="DESCRIPBE"
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ mb: "10px" }}
                  onChange={(e) => setDescribe(e.target.value)}
                  value={describe}
                />
                <TextField
                  placeholder="URL"
                  id="outlined-basic"
                  variant="outlined"
                  sx={{ mb: "10px" }}
                  onChange={(e) => setUrl(e.target.value)}
                  value={url}
                />

                <Button
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "#fff",
                    margin: "10px 0",
                    "&:hover": { backgroundColor: "#1168bf" },
                  }}
                  onClick={() =>
                    mutation.mutate({
                      // id: uuidv4(),
                      title: title,
                      describe: describe,
                      url: url,
                      date: date,
                    })
                  }
                >
                  Add new post{" "}
                </Button> */}

              {/* <NestedModal
                createPost={() => createPost}
                title={title}
                describe={describe}
                url={url}
                setTitle={setTitle}
                setDescribe={setDescribe}
                setUrl={setUrl}
              /> */}
              {/* </Box> */}
            </Box>
          );
        })}
    </Box>
  );
};

export default Screenshots;
