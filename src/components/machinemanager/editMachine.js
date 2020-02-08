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

const useStyles = makeStyles(theme => ({
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

export default function EditMachineManager() {
  const classes = useStyles();
  var mid = localStorage.getItem("machine");

  const initialState = {
    machineCode:"",
    description:"",
    rate:"0",
    maxHours:"0",
  }

  var [data, setData] = React.useState(initialState);

    var res = axios.get(`http://localhost:8080/machineManager/${mid}`);
    res = Promise.resolve(res)
    res.then(function (result) { 
        initialState.machineCode = result.data.machineCode;
        initialState.description = result.data.description;
        initialState.maxHours = result.data.maxHours;
        initialState.rate = result.data.rate
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
      console.log(data.machineCode);
      axios.put(`http://localhost:8080/machineManager/update/${mid}`, data)
      .then(
        window.location.href = "http://localhost:3000/dashboard"
      ) 
    };

  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Machine Code
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                                required fullWidth value={data.machineCode}
                                id="machineCode" label="Machine Code" name="machineCode" onChange={handleInputChange}
                                />
            </Grid>
            <Grid item xs={12} >
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="description" label="Description" name="description" onChange={handleInputChange}
                            value={data.description}/>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="rate" label="Hourly Rate" name="rate" onChange={handleInputChange}
                            value={data.rate}/>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="maxHours" label="Max Hour Per Day" name="maxHours" onChange={handleInputChange}
                            value={data.maxHours}/>
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

  );
}
