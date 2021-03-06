import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from "@material-ui/core/Container";
import CssBaseline from '@material-ui/core/CssBaseline';
import Title from './title';
import useAxios from 'axios-hooks'
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios'

const StyledTableCell = withStyles(theme => ({
  // root: {
  //   display: 'flex',
  // },
  head: {
    // backgroundColor: "#e1bee7",
    color: "#e64a19",
    height: "80px",
    fontSize: 18
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


export default function TimeSheetData(props) {
  const[{data,loading, error}]=useAxios(
  'http://localhost:8080/userTimeSheet'
  )
  console.log(data)
  
if (loading) return <p>Loading...</p>
if (error) return <p>Error!</p>

  return (
    <React.Fragment>   
      <Container component="main" maxWidth="lg">
      <Title>Time Sheet Approval</Title>
      <Grid container>
        <Grid item xs={10}></Grid>
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
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
      </Container>
    </React.Fragment>
  );
}