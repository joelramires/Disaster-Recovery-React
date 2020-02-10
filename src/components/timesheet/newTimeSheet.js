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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import RefreshIcon from '@material-ui/icons/Refresh';
import SaveIcon from '@material-ui/icons/Save';
import Copyright from '../Media/copyright';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
// import GridItem from '../Grid/GridItem';
import useAxios from 'axios-hooks';
import axios from 'axios';
import NavbarUser from '../NavbarUser';
import Alert from '@material-ui/lab/Alert';
import validate from '../Validation/ValidationRules';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

  formControl: {
    margin: theme.spacing(1),
    width: '380px'
  },
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },
  
}));

export default function NewTimeSheet() {
  const classes = useStyles();
  const initialState = {
    siteCode:"",
    date:"2020-02-10",
    jobCode1:"",
    jobHour1:"",
    machineCode1:"",
    machineHour1:"",
    jobCode2:"",
    jobHour2:"",
    machineCode2:"",
    machineHour2:"",
    jobCode3:"",
    jobHour3:"",
    machineCode3:"",
    machineHour3:"",
  }

  const [errors, setErrors] = useState(initialState);

  var[{data,loading, error}]=useAxios(
    'http://localhost:8080/jobManager'
    )
  
    const jobCode = data;

  [{data,loading, error}]=useAxios(
      'http://localhost:8080/machineManager'
      )
    
      const machineCode = data;
    var setData = "";
   [data, setData] = React.useState(initialState);
    const handleInputChange = event => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
        console.log(data)
      };

      const handleFormSubmit = event => {
        console.log("handleFormSubmit");
          event.preventDefault();
          setErrors(validate(data)); 
          setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
          });
          var dataJson = data;
          axios.post("http://localhost:8080/newTimeSheet", dataJson)
          .then(
            window.location.href = "http://localhost:3000/timesheet"
          ) 
        };

  return (
    <div id="maindiv">
      <React.Fragment>
      <div className={classes.root}>
    <CssBaseline />
    <NavbarUser />
    <main className={classes.content}></main>
      <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
      
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
        
        <Grid container id="timeSheetEntry">
          <Grid container> 
          <Typography component="h1" variant="h5">
              TimeSheet Submission
          </Typography>
          </Grid>
          
          <Grid container spacing={3} className="">
            <Grid item xs >
            <TextField variant="outlined" margin="normal"
                                required fullWidth autoFocus
                                id="siteCode" label="Site Code" name="siteCode" onChange={handleInputChange}/>
              {errors.siteCode && (
                    <Alert severity="error">{errors.siteCode}</Alert>
                  )}
            </Grid>
            {/* <Grid item xs>
            <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="contractorName" label="Contractor Name" name="text" />
            </Grid> */}
            <Grid item xs>
            <TextField id="date" label="Date" type="date" name="date"
                            defaultValue="2020-02-10" className={classes.textField}
                            InputLabelProps={{shrink: true,}} onChange={handleInputChange}/>
            </Grid>
        </Grid>
        </Grid>
        
        <Grid container id="laborEntery">
        <Grid container>
        <Typography component="h1" variant="h5">
            Labor Entry
        </Typography>
        </Grid>
        <Grid container spacing={3}>
        
            <Grid item xs>
            {/* <TextField variant="outlined" margin="normal"
                                fullWidth autoFocus
                                id="laborCode" label="Labor Code" name="text" /> */}
              <FormControl className={classes.formControl}  >
                <InputLabel id="select-label">Labor Code</InputLabel>
                <Select labelId="laborCode" id="jobCode1" name="jobCode1" onChange={handleInputChange}>
                  {jobCode && jobCode.map( code => (
                    <MenuItem value={code.jobCode}>{code.jobCode}</MenuItem>  
                  ) )}                
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
            <TextField type="number" variant="outlined" margin="normal" fullWidth
                            id="jobHour1" label="Hrs. Worked" name="jobHour1" onChange={handleInputChange}/>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
            <Grid item xs>
              <FormControl className={classes.formControl}  >
                <InputLabel id="select-label">Labor Code</InputLabel>
                <Select labelId="laborCode1" id="jobCode2" name="jobCode2" onChange={handleInputChange}>
                {jobCode && jobCode.map( code => (
                    <MenuItem value={code.jobCode}>{code.jobCode}</MenuItem>  
                  ) )}            
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
            <TextField type="number" variant="outlined" margin="normal" fullWidth 
                            id="jobHour2" label="Hrs. Worked" name="jobHour2" onChange={handleInputChange}/>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
            <Grid item xs>
              <FormControl className={classes.formControl}  >
                <InputLabel id="select-label">Labor Code</InputLabel>
                <Select labelId="laborCode2" id="jobCode3" name="jobCode3" onChange={handleInputChange}>
                {jobCode && jobCode.map( code => (
                    <MenuItem value={code.jobCode}>{code.jobCode}</MenuItem>  
                  ) )}       
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
            <TextField type="number" variant="outlined" margin="normal" fullWidth 
                            id="jobHour3" label="Hrs. Worked" name="jobHour3" onChange={handleInputChange}/>
            </Grid>
        </Grid>
      </Grid> 

      <Grid container id="laborEntery">
        <Grid container>
        <Typography component="h1" variant="h5">
            Machine Entry
        </Typography>
        </Grid>
        <Grid container spacing={3}>
        
            <Grid item xs>
            {/* <TextField variant="outlined" margin="normal"
                                fullWidth autoFocus
                                id="machineCode" label="Machine Code" name="text" /> */}

            <FormControl className={classes.formControl} id="machinecode" >
                <InputLabel id="select-label" >Machine Code</InputLabel>
                <Select labelId="machineCode" id="machineCode1" name="machineCode1" onChange={handleInputChange}>
                {machineCode && machineCode.map( code => (
                    <MenuItem value={code.machineCode}>{code.machineCode}</MenuItem>  
                  ) )}               
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <TextField type="number" variant="outlined" margin="normal" fullWidth 
                            id="machineHour1" label="Hrs. Used" name="machineHour1" onChange={handleInputChange}/>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
        <Grid item xs>
        <FormControl className={classes.formControl} id="machinecode" >
                <InputLabel id="select-label">Machine Code</InputLabel>
                <Select labelId="machineCode" id="machineCode2" name="machineCode2" onChange={handleInputChange}>
                {machineCode && machineCode.map( code => (
                    <MenuItem value={code.machineCode}>{code.machineCode}</MenuItem>  
                  ) )}             
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <TextField type="number" variant="outlined" margin="normal" fullWidth 
                            id="machineHour2" label="Hrs. Used" name="machineHour2" onChange={handleInputChange}/>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
        <Grid item xs>
        <FormControl className={classes.formControl} id="machinecode" >
                <InputLabel id="select-label">Machine Code</InputLabel>
                <Select labelId="machineCode" id="machineCode3" name="machineCode3" onChange={handleInputChange}>
                {machineCode && machineCode.map( code => (
                    <MenuItem value={code.machineCode}>{code.machineCode}</MenuItem>  
                  ) )}            
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <TextField type="number"variant="outlined" margin="normal" fullWidth 
                            id="machineHour3" label="Hrs. Used" name="machineHour3" onChange={handleInputChange}/>
            </Grid>
        </Grid>
      </Grid>                      
      <Grid container spacing={3} marginTop={10}>
      
        <Grid item xs={12} sm={4}>
              <Button type="reset" fullWidth
                variant="contained" color="secondary" className={classes.reset}
                startIcon={<RefreshIcon />} size="large" fullWidth >
                Reset
            </Button>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth
                className={classes.button} startIcon={<SaveIcon />}
                disabled={(data.siteCode == '' || data.laborCode == '' || data.jobHour1 == '' || 
            data.machineCode == '' || data.machineHour1 == '') ? true : false}  >
                Submit
            </Button>
            </Grid>
      </Grid>     
          <Box mt={5}>
            <Copyright />
          </Box>                      

            <Grid container>

            </Grid>
            
      </form>
      </div>
    </Container>
    </div>
    </React.Fragment>
  </div>
  );
}
