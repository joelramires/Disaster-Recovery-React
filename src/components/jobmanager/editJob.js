import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SaveIcon from '@material-ui/icons/Save';
import Avatar from '@material-ui/core/Avatar';
import ListAltIcon from '@material-ui/icons/ListAlt';
import RefreshIcon from '@material-ui/icons/Refresh';
import CssBaseline from '@material-ui/core/CssBaseline';
import Copyright from '../Media/copyright'; 
import Box from '@material-ui/core/Box';
import axios from 'axios';
import useAxios from 'axios-hooks';
import Navbar from '../Navbar';

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
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function EditJobManager() {
  const classes = useStyles();
  var mid = localStorage.getItem("job");

  const initialState = {
    jobCode:"",
    jobDescription:"",
    rateHourly:"0",
    maxHour:"0",
  }

  var [data, setData] = React.useState(initialState);

    var res = axios.get(`http://localhost:8080/getJobManager/${mid}`);
    res = Promise.resolve(res)
    res.then(function (result) { 
        initialState.jobCode = result.data.jobCode;
        initialState.jobDescription = result.data.jobDescription;
        initialState.maxHour = result.data.maxHour;
        initialState.rateHourly = result.data.rateHourly;
     });

  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleFormSubmit = event => {
    console.log("handleFormSubmit");
      event.preventDefault();
      setData({
        ...data,
        isSubmitting: true,
        errorMessage: null
      });
      axios.put(`http://localhost:8080/updateJobManager/${mid}`, data)
      .then(
        window.location.href = "http://localhost:3000/dashboard"
      ) 
    };

  return (
    <React.Fragment>
    <div className={classes.root}>
    <CssBaseline />
    <Navbar />
    <main className={classes.content}></main>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Job Code
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                                required fullWidth value={data.jobCode}
                                id="jobCode" label="Job Code" name="jobCode" onChange={handleInputChange}
                                />
            </Grid>
            <Grid item xs={12} >
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="jobDescription" label="Description" name="jobDescription" onChange={handleInputChange}
                            value={data.jobDescription}/>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="rateHourly" label="Hourly Rate" name="rateHourly" onChange={handleInputChange}
                            value={data.rateHourly}/>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="maxHour" label="Max Hour Per Day" name="maxHour" onChange={handleInputChange}
                            value={data.maxHour}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="reset" fullWidth
                variant="contained" color="secondary" className={classes.reset} onClick={handleInputChange}
                startIcon={<RefreshIcon />} size="large" fullWidth >
                Reset
            </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth
                className={classes.button} startIcon={<SaveIcon />} >
                Submit
            </Button>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
          
        </form>
      </div>
      
    </Container>
</div>
</React.Fragment>
  );
}
