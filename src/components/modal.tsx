import React from "react";

export const modal = () => {
  return <div>modal</div>;
};

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { Button, Fab, TextField, Typography } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { Dispatch, SetStateAction } from "react";

// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "#1d2124",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// interface MutatnioI {
//   createPost: () => void;
//   title: string;
//   describe: string;
//   url: string;
//   setTitle: Dispatch<SetStateAction<string>>;
//   setDescribe: Dispatch<SetStateAction<string>>;
//   setUrl: Dispatch<SetStateAction<string>>;
// }

// export default function NestedModal({
//   createPost,
//   title,
//   describe,
//   url,
//   setTitle,
//   setDescribe,
//   setUrl,
// }: MutatnioI) {
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box>
//       <Fab
//         onClick={handleOpen}
//         color="primary"
//         aria-label="add"
//         sx={{ "&:hover": { backgroundColor: "#1168bf" } }}
//       >
//         <AddIcon />
//       </Fab>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="parent-modal-title"
//         aria-describedby="parent-modal-description"
//       >
//         <Box sx={{ ...style, width: 400 }}>
//           <Typography
//             variant="h6"
//             id="parent-modal-title"
//             sx={{ margin: "10px 0" }}
//           >
//             Create new post{" "}
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             {/* <TextField
//               id="outlined-basic"
//               variant="outlined"
//               sx={{ color: "#fff", margin: "10px 0" }}
//               onChange={(e) => setAuthor(e.target.value)}
//               value={author}
//             /> */}
//             <TextField
//               id="outlined-basic"
//               variant="outlined"
//               sx={{ mb: "10px" }}
//               onChange={(e) => setTitle(e.target.value)}
//               value={title}
//             />
//             <TextField
//               id="outlined-basic"
//               variant="outlined"
//               sx={{ mb: "10px" }}
//               onChange={(e) => setDescribe(e.target.value)}
//               value={describe}
//             />
//             <TextField
//               id="outlined-basic"
//               variant="outlined"
//               sx={{ mb: "10px" }}
//               onChange={(e) => setUrl(e.target.value)}
//               value={url}
//             />

//             <Button
//               sx={{
//                 backgroundColor: "#1976d2",
//                 color: "#fff",
//                 margin: "10px 0",
//                 "&:hover": { backgroundColor: "#1168bf" },
//               }}
//               onClick={() => createPost()}
//             >
//               Add new post
//             </Button>
//           </Box>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }
