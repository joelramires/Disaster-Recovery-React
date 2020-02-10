import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import Title from './title';
import useAxios from 'axios-hooks'
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
import SpellcheckIcon from '@material-ui/icons/Spellcheck';
import Navbar from './Navbar';

const StyledTableCell = withStyles(theme => ({
  // root: {
  //   display: 'flex',
  // },
  head: {
    // backgroundColor: "#e1bee7",
    color: "#e64a19",
    height: "80px",
    fontSize: 24
  },
  body: {
    fontSize: 24,
  }
}))(TableCell);

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function TimeSheetData(props) {
  const classes = useStyles();
  const[{data,loading, error}]=useAxios(
  'http://localhost:8080/timeSheet'
  )
  
if (loading) return <p>Loading...</p>
if (error) return <p>Error!</p>


async function handleApproval(id) { 
  try {
    console.log(id)
    await axios.post(`http://localhost:8080/approvalTimesheet/${id}`); 
  } catch(error) {
    console.error(error);
  }
  console.log("Approvaled");
  window.location.reload()
}

  return (
    <React.Fragment> 
    <div className={classes.root}>
    <CssBaseline />
    <Navbar />
    <main className={classes.content}></main> 
    <Container component="main" maxWidth="lg" > 
    <CssBaseline /> 
    <div className={classes.paper}>
      <Title>Time Sheet Approval</Title>
      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
      <Table size="small">        
        <TableHead>          
          <TableRow>
            <StyledTableCell>Site Code</StyledTableCell>
            <StyledTableCell>Total Amount</StyledTableCell>
            <StyledTableCell>Created Date</StyledTableCell>
            <StyledTableCell>Total Hours</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Approval</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(timeSheet => (
            <TableRow key={timeSheet.TimeSheetId}>
              <TableCell>{timeSheet.siteCode}</TableCell>
              <TableCell>{timeSheet.totalAmount}</TableCell>
              <TableCell>{timeSheet.creatDate}</TableCell>
              <TableCell>{timeSheet.hours}</TableCell>
              <TableCell>{timeSheet.user_name}</TableCell>
              <TableCell>{timeSheet.status}</TableCell>
              <TableCell>
              {timeSheet.status === "approval" ? "" : 
              <Tooltip id="tooltip-top-start"
              title="Approval" onClick={() => handleApproval(timeSheet.timeSheetId)} placement="top">
              <IconButton style={{ color: purple[500] }} aria-label="Approv">
              <SpellcheckIcon />
            </IconButton>
            </Tooltip>}
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
      </div>
      </Container>  
      </div>
    </React.Fragment>
  );
}