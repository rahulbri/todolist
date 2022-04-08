import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, deleteUsers } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const { users } = useSelector((state) => state.data);
  console.log("users", users);

  const handleDelete = (id) => {
    if (window.confirm("are you sure delete this message")) {
      dispatch(deleteUsers(id));
    }
  };
  return (
    <div className="mt-10">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">NAME</StyledTableCell>
              <StyledTableCell align="left">CONTACT</StyledTableCell>
              <StyledTableCell align="left">ADDRESS</StyledTableCell>
              <StyledTableCell align="left">EMAIL</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((row) => (
                <StyledTableRow key={row}>
                  <StyledTableCell component="th" scope="row">
                    {row.id}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.taskName}</StyledTableCell>
                  <StyledTableCell align="left">{row.description}</StyledTableCell>
                  <StyledTableCell align="left">{row.date}</StyledTableCell>
                  <StyledTableCell align="left">{row.time}</StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      <Button
                        style={{ marginRight: "10px" }}
                        color="primary"
                        onClick={() => navigate(`/editUser/${row.id}`)}
                      >
                        EDIT
                      </Button>
                      <Button
                        color="secondary"
                        onClick={() => handleDelete(row.id)}
                      >
                        DELETE
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            {/* {
            users && users.map((items,index)=>
            <div key={index}>
                <h3>{items.name}
                    </h3> 
                    <h1>{items.name}</h1>
            </div>
            )
        } */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
