"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TemporaryDrawer from "../ui/drawer";
// import { getCheckIns } from "../../../../store/getCheckIns";
import { query, collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../store/firebase";

export default function BasicTable() {
  const [state, setState] = React.useState(false);
  const [checkIns, setCheckIns] = React.useState([]);
  const [drawerData, setDrawerData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };
  // React.useEffect(() => {
  //   async function GetCheckIns() {
  //     const data = await getCheckIns();
  //     setCheckIns(data);
  //     setIsLoading(false);
  //   }
  //   GetCheckIns();
  // }, []);
  React.useEffect(() => {
    async function GetCheckIns() {
      const q = query(collection(db, "checkIns"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const updatedData = [];
        querySnapshot.forEach((doc) => {
          updatedData.push({ id: doc.id, ...doc.data() });
        });
        setCheckIns(updatedData);
        setIsLoading(false);
      });

      return () => {
        // Unsubscribe from the snapshot listener when the component unmounts
        unsubscribe();
      };
    }

    GetCheckIns();
  }, []);
  if (isLoading) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

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
      <TableContainer
        component={Paper}
        style={{ padding: "0 5%", backgroundColor: "#fafafa" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell variant="head">Title</TableCell>
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
                  },
                }}
                style={{
                  backgroundColor: "white",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
                // onClick={toggleDrawer}
                onClick={(e) => {
                  if (
                    event.type === "keydown" &&
                    (event.key === "Tab" || event.key === "Shift")
                  ) {
                    return;
                  }

                  setState(!state);
                  setDrawerData({ title: row.title, imageUrl: row.imageUrl });
                }}
              >
                <TableCell component="th" scope="row">
                  {row?.title}
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  <span style={{ backgroundColor: "#79ffe1", padding: "3px" }}>
                    {" "}
                    CHECKED IN
                  </span>
                </TableCell>
                <TableCell>{readableDate(row?.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TemporaryDrawer
        state={state}
        toggleDrawer={toggleDrawer}
        data={drawerData}
      />
    </>
  );
}
