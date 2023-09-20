"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function TemporaryDrawer({ state, toggleDrawer }) {
  const list = (anchor = "right") => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem disablePadding sx={{ p: 2, borderBottom: "1px solid black" }}>
          <CloseIcon sx={{ cursor: "pointer" }} />
          <ListItemText primary="Details" sx={{ marginLeft: "10px" }} />
        </ListItem>
      </List>
      <List sx={{ p: 2 }}>
        <h3>Checkin Name</h3>
        <Image src="/images/house.jpg" alt="house" width={300} height={200} />
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
