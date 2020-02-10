import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// import UpdateIcon from '@material-ui/icons/Update';
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
import useAxios from 'axios-hooks'
import axios from 'axios'
// import GridItem from '../Grid/GridItem';
import Navbar from '../Navbar';
import Alert from '@material-ui/lab/Alert';
import validate from '../Validation/ValidationRules';

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

export default function NewJobManager(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [laborCode, setlaborCode] = useState({});

  const initialState = {
    jobCode:"",
    jobDescription:"",
    rateHourly:"",
    maxHours:"",
  }

  const [errors, setErrors] = useState(initialState);
  // const [machineCode, setMachineCode] = React.useState("");

  // const initialState = {jobCode:'', jobDescription:'', maxHours:'', rateHourly:'' }
  // const [laborCode, setlaborCode] = useState(initialState);
  
  // const handleChange = event => {
  //   setlaborCode(event.target.value);

  // };

  const [data, setData] = React.useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
    console.log(data.jobCode)
  };
  
  // function handleSubmit(event) { 
  //   event.preventDefault();  
  //   if(!laborCode.title || !laborCode.content ) return 
  //   async function postArticle() {
  //     try {
  //       const response = await post('/api/articles', laborCode); 
  //       props.history.push(`/articles/${response.data._id}`);  
  //     } catch(error) {
  //       console.log('error', error);
  //     }
  //   }
  //   postArticle();
  // }

  // async function handleDelete() { 
  //   try {
  //     await useAxios.post(`http://localhost:8080/deleteJobManager/${props.match.params.id}`); 
  //     props.history.push("/jobManager"); 
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }
  
  const handleFormSubmit = event => {
    console.log("handleFormSubmit");
      event.preventDefault();
      setErrors(validate(data));  
      setData({
        ...data,
        isSubmitting: true,
        errorMessage: null
      });
      axios.post("http://localhost:8080/newJobManager", data)
      .then(
        window.location.href = "http://localhost:3000/dashboard"
      ) 
    };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
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
          Create New Job Code
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                                required fullWidth autoFocus
                                id="jobCode" label="Job Code" name="jobCode" onChange={handleInputChange}
                                value={data.jobCode}/>
              {errors.jobCode && (
                    <Alert severity="error">{errors.jobCode}</Alert>
                  )}
            </Grid>
            <Grid item xs={12} >
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="jobDescription" label="Description" name="jobDescription" onChange={handleInputChange}
                            value={data.jobDescription}/>
              {errors.jobDescription && (
                    <Alert severity="error">{errors.jobDescription}</Alert>
                  )}              
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth type="number"
                            id="rateHourly" label="Hourly Rate" name="rateHourly" onChange={handleInputChange}
                            value={data.rateHourly}/>
              {errors.rateHourly && (
                    <Alert severity="error">{errors.rateHourly}</Alert>
                  )}              
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth type="number"
                            id="maxHours" label="Max Hours" name="maxHours" onChange={handleInputChange}
                            value={data.maxHours}/>
              {errors.maxHours && (
                    <Alert severity="error">{errors.maxHours}</Alert>
                  )}              
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="reset" fullWidth
                variant="contained" color="secondary" className={classes.reset}
                startIcon={<RefreshIcon />} size="large" fullWidth >
                Reset
            </Button>
            </Grid>

            <Grid item xs={12} sm={6}>

            <Button type="submit" variant="contained" color="primary" size="large" fullWidth
                className={classes.button} startIcon={<SaveIcon />}
                disabled={(data.jobCode == '' || data.jobDescription == '' || data.rateHourly == '' || 
            data.maxHours == '') ? true : false}
                >
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
