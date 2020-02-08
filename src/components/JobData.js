import React, {useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Title from './title';
import useAxios from 'axios-hooks'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Grid } from '@material-ui/core';
import { useParams } from "react-router"
import { purple } from '@material-ui/core/colors';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { withStyles } from "@material-ui/core/styles";

// import NewJobManager from './jobmanager/newJobManager';


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

export default function JobData(props) {
  const[{data,loading, error}]=useAxios(
  'http://localhost:8080/jobManager'
  )
  
if (loading) return <p>Loading...</p>
if (error) return <p>Error!</p>

async function handleDelete(id) { 
  try {
    // console.log(useParams.id)
    await axios.delete(`http://localhost:8080/deleteJobManager/${id}`); 
    props.push("/jobData"); 

  } catch(error) {
    console.error(error);
    
  }
  console.log("deleted");
  window.location.reload()
}

  return (
    <React.Fragment>      
      <Title>Job Code Management</Title>
      <Grid container>
        <Grid item xs={10}></Grid>
        <Grid xs={2} margin-left="auto">
        <Link to="/newJobManager" className="btn btn-success btn-md mb-3" role="button" aria-pressed="true"><PlaylistAddIcon/> Create New</Link>
        </Grid>
      </Grid>
      <Table size="small">        
        <TableHead>          
          <TableRow>
            <StyledTableCell>Job Code</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Hourly Rate</StyledTableCell>
            <StyledTableCell>Max Hours</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(job => (
            <TableRow key={job.jobId}>
              <TableCell>{job.jobCode}</TableCell>
              <TableCell>{job.jobDescription}</TableCell>
              <TableCell>{job.rateHourly}</TableCell>
              <TableCell>{job.maxHour}</TableCell>
              <TableCell>
                <Tooltip id="tooltip-top"
                  title="Edit Task" placement="top">
                    <IconButton style={{ color: purple[500] }} aria-label="Edit">
                      <Edit />
                    </IconButton>
                </Tooltip>
                <Tooltip id="tooltip-top-start"
                title="Remove" onClick={() => handleDelete(job.jobId)} placement="top">
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