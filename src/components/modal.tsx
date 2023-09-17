import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Button, Fab, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorIcon from "@mui/icons-material/Error";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1d2124",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface NewPostI {
  addNewPost: () => void;
  title: string;
  description: string;
  url: string;
  author: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setUrl: Dispatch<SetStateAction<string>>;
  setAuthor: Dispatch<SetStateAction<string>>;
}

export default function NestedModal({
  addNewPost,
  title,
  description,
  url,
  author,
  setTitle,
  setDescription,
  setUrl,
  setAuthor,
}: NewPostI) {
  const [open, setOpen] = React.useState(false);
  const [isAdding, setIsAdding] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPostI>();

  const onSubmit: SubmitHandler<NewPostI> = async (data) => {
    if (!errors.author && !errors.title && !errors.description && !errors.url) {
      setIsAdding(true);
      try {
        await addNewPost();
        setIsAdding(true);
      } catch (error) {
        setIsAdding(true);
        console.error("Error while adding a new post:", error);
      }
      setTimeout(() => {
        setIsAdding(false);
        handleClose();
      }, 2500);
    }
  };

  return (
    <Box>
      <Fab
        onClick={handleOpen}
        color="primary"
        aria-label="add"
        sx={{ "&:hover": { backgroundColor: "#1168bf" } }}
      >
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <Box
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: "30px",
              top: "20px",
              cursor: "pointer",
            }}
          >
            <CloseIcon sx={{ fontSize: "30px" }} />
          </Box>
          <Typography
            variant="h6"
            id="parent-modal-title"
            sx={{ margin: "15px 0", mb: "25px", fontSize: "22px" }}
          >
            Create new post{" "}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                {...register("author", { required: true })}
                id="outlined-basic"
                variant="outlined"
                placeholder="Nick"
                sx={{
                  mb: "10px",
                  "& input": {
                    color: "#fff",
                  },
                }}
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
              <TextField
                {...register("title", { required: true })}
                id="outlined-basic"
                variant="outlined"
                placeholder="Title"
                sx={{
                  mb: "10px",
                  "& input": {
                    color: "#fff",
                  },
                }}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <TextField
                {...register("description", { required: true })}
                id="outlined-basic"
                variant="outlined"
                placeholder="Description"
                sx={{
                  mb: "10px",
                  "& input": {
                    color: "#fff",
                  },
                }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />

              <TextField
                {...register("url", { required: true })}
                id="outlined-basic"
                variant="outlined"
                placeholder="Url image"
                sx={{
                  mb: "10px",
                  "& input": {
                    color: "#fff",
                  },
                }}
                onChange={(e) => setUrl(e.target.value)}
                value={url}
              />
              {errors.author?.type === "required" ||
                errors.title?.type === "required" ||
                errors.description?.type === "required" ||
                (errors.url?.type === "required" && (
                  <Typography
                    sx={{
                      color: "red",
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                      gap: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    <ErrorIcon /> All fields must be completed
                  </Typography>
                ))}
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  margin: "10px 0",
                  "&:hover": { backgroundColor: "#1168bf" },
                }}
              >
                {isAdding ? "Adding..." : "Add new post "}
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
