"use client";
import React from "react";
import Button from "@mui/material/Button";
import classes from "./main-header.module.css";
import BasicModal from "../ui/ui/modal";
export default function MainHeader() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className={classes.main}>
        <div>
          <h1>CheckIns</h1>
          <p>Lorem ipsum dolor sit amet, something important to say here</p>
        </div>
        <div>
          <Button variant="contained" onClick={handleOpen}>
            Add CheckIns
          </Button>
        </div>
      </div>
      <BasicModal open={open} handleClose={handleClose} />
    </>
  );
}
