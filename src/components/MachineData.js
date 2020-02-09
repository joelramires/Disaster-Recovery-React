import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';
import useAxios from 'axios-hooks';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { purple, red, deepOrange } from '@material-ui/core/colors';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';

const StyledTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: "#e1bee7",
    color: "#e64a19",
    height: "80px",
    fontSize: 22
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

export default function AdminData(props) {
  const[{data,loading, error}]=useAxios(
  'http://localhost:8080/machineManager'
  )
  
if (loading) return <p>Loading...</p>
if (error) return <p>Error!</p>

async function handleChange(mid) {
  localStorage.setItem("machine", mid);
}

async function handleDelete(id) { 
  try {
    // console.log(useParams.id)
    await axios.delete(`http://localhost:8080/deleteMachineManager/${id}`); 
  } catch(error) {
    console.error(error);
  }
  console.log("deleted");
  window.location.href = "http://localhost:3000/dashboard";
}

  return (
    <React.Fragment>      
      <Title>Machine Code Management</Title>
      <Grid container>
        <Grid item xs={10}></Grid>
        <Grid xs={2} margin-left="auto">
        <Link to="/adminNewMachineManager" className="btn btn-success btn-md mb-3" role="button" aria-pressed="true"><PlaylistAddIcon/> Create New</Link>
        </Grid>
      </Grid>
      <Table size="small">        
        <TableHead>          
          <TableRow>
            <StyledTableCell>Machine Code</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Hourly Rate</StyledTableCell>
            <StyledTableCell>Max Hours</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(machine => (
            <TableRow key={machine.id}>
              <TableCell>{machine.machineCode}</TableCell>
              <TableCell>{machine.description}</TableCell>
              <TableCell>{machine.rate}</TableCell>
              <TableCell>{machine.maxHours}</TableCell>
              <TableCell>
              <Link to={"/machineManager/" +  machine.id}>
                <Tooltip id="tooltip-top"
                  title="Edit Task" placement="top" onMouseEnter={() => handleChange(machine.id)}>
                    <IconButton style={{ color: purple[500] }} aria-label="Edit" >
                      <Edit />
                    </IconButton>
                </Tooltip>
                </Link>
                <Tooltip id="tooltip-top-start"
                title="Remove" onClick={() => handleDelete(machine.id)} placement="top">
                  <IconButton color="secondary" aria-label="Close">
                    <Close />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}