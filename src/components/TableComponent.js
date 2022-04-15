import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableComponent = ({ tableRows, dataTable }) => {
  const getFullName = ({ first, last }) => {
    return `${first} ${last}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableRows.map((row, idx) => (
              <TableCell key={idx} align={idx > 0 ? "right" : "left"}>
                {row}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.login.username}
              </TableCell>
              <TableCell align="right">{getFullName(row.name)}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.registered.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
