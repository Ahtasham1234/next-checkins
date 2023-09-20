import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./modal.module.css";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { addCheckIns } from "../../../../../store/addCheckIns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  py: 2,
  px: 0,
};

export default function BasicModal({ open, handleClose }) {
  const [title, setTitle] = React.useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, imageUrl);
    setLoading(true);
    await addCheckIns({ title, imageUrl }, () => {
      setTitle("");
      setImageUrl("");
      setLoading(false);
      handleClose();
    });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={classes.heading} sx={{ px: 2, py: 1 }}>
            {" "}
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="p"
              style={{ fontWeight: "bold" }}
            >
              New CheckIn
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Box>

          <form onSubmit={handleSubmit}>
            <div style={{ padding: "2rem" }}>
              <TextField
                id="outlined-basic"
                label="Check In title"
                variant="outlined"
                fullWidth
                sx={{ mt: 3 }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Image Url"
                variant="outlined"
                fullWidth
                sx={{ my: 3 }}
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                padding: 2,
                borderTop: "1px solid black",
              }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "black" }}
                type="submit"
              >
                {loading ? "Adding..." : "Create Check In"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
