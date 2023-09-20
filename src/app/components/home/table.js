"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TemporaryDrawer from "../ui/ui/drawer";
import { getCheckIns } from "../../../../store/getCheckIns";

export default function BasicTable() {
  const [state, setState] = React.useState(false);
  const [checkIns, setCheckIns] = React.useState([]);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };
  React.useEffect(() => {
    async function GetCheckIns() {
      const data = await getCheckIns();
      setCheckIns(data);
    }
    GetCheckIns();
  }, []);

  const readableDate = (date) => {
    const jsDate = date?.toDate();
    const formattedDate = jsDate?.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };
  const user = {
    name: "John",
  };
  return (
    <>
      <TableContainer component={Paper} style={{ padding: "0 5%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Owner</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkIns?.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                    cursor: "pointer",
                  },
                }}
                onClick={toggleDrawer}
              >
                <TableCell component="th" scope="row">
                  {row?.title}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>Checked In</TableCell>
                <TableCell>{readableDate(row?.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TemporaryDrawer state={state} toggleDrawer={toggleDrawer} />
    </>
  );
}
