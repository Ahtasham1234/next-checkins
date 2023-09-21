"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function TemporaryDrawer({ state, toggleDrawer, data }) {
  const list = (anchor = "right") => (
    <Box
      sx={{ width: 380 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem disablePadding sx={{ p: 2, borderBottom: "1px solid black" }}>
          <CloseIcon sx={{ cursor: "pointer", color: "rgba(0, 0, 0, 0.45)" }} />
          <ListItemText
            primary="Details"
            sx={{ marginLeft: "10px", fontWeight: "500" }}
          />
        </ListItem>
      </List>
      <List sx={{ p: 2 }}>
        <h3 style={{ fontWeight: "500", fontSize: "30px" }}>{data.title}</h3>
        <Image
          src={data.imageUrl}
          alt="house"
          width={350}
          height={250}
          priority
          style={{ borderRadius: "14px" }}
        />
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer}>toggle</Button> */}
      <Drawer anchor="right" open={state} onClose={toggleDrawer}>
        {list("right")}
      </Drawer>
    </div>
  );
}
