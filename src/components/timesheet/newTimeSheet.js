import React from "react";
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


const useStyles = makeStyles(theme => ({
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
  const [open, setOpen] = React.useState(false);
  const [laborCode, setlaborCode] = React.useState("");
  const [laborCode1, setlaborCode1] = React.useState("");
  const [laborCode2, setlaborCode2] = React.useState("");

  const [machineCode, setMachineCode] = React.useState("");
  const handleChange = event => {
    setlaborCode(event.target.value);
    setlaborCode1(event.target.value);
    setlaborCode2(event.target.value);

  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div id="maindiv">
      <Container component="main" maxWidth="lg">
      <CssBaseline />
      <div className={classes.paper}>
      
        <form className={classes.form} noValidate>
        
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
                                id="siteCode" label="Site Code" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="contractorName" label="Contractor Name" name="text" />
            </Grid>
            <Grid item xs>
            <TextField id="date" label="Date" type="date"
                            defaultValue="2020-02-04" className={classes.textField}
                            InputLabelProps={{shrink: true,}} />
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
                <Select labelId="laborCode" id="laborCode" open={open}
                  onClose={handleClose} onOpen={handleOpen}
                  value={laborCode} onChange={handleChange}>
                  <MenuItem value=""></MenuItem>                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="workedHours" label="Hrs. Worked" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="total" label="Total" name="text" />
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
            <Grid item xs>
              <FormControl className={classes.formControl}  >
                <InputLabel id="select-label">Labor Code</InputLabel>
                <Select labelId="laborCode1" id="laborCode1" open={open}
                  onClose={handleClose} onOpen={handleOpen}
                  value={laborCode1} onChange={handleChange}>
                  <MenuItem value=""></MenuItem>                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="workedHours" label="Hrs. Worked" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="total" label="Total" name="text" />
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
            <Grid item xs>
              <FormControl className={classes.formControl}  >
                <InputLabel id="select-label">Labor Code</InputLabel>
                <Select labelId="laborCode2" id="laborCode2" open={open}
                  onClose={handleClose} onOpen={handleOpen}
                  value={laborCode2} onChange={handleChange}>
                  <MenuItem value=""></MenuItem>                  
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="workedHours" label="Hrs. Worked" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="total" label="Total" name="text" />
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
                <Select labelId="machineCode" id="machineCode" open={open}
                  onClose={handleClose} onOpen={handleOpen}
                  value={machineCode} onChange={handleChange}>
                  <MenuItem value=""></MenuItem>                  
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="usedHours" label="Hrs. Used" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="total" label="Total" name="text" />
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
        <Grid item xs>
        <FormControl className={classes.formControl} id="machinecode" >
                <InputLabel id="select-label">Machine Code</InputLabel>
                <Select labelId="machineCode" id="machineCode" open={open}
                  onClose={handleClose} onOpen={handleOpen}
                  value={machineCode} onChange={handleChange}>
                  <MenuItem value=""></MenuItem>                  
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="usedHours" label="Hrs. Used" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="total" label="Total" name="text" />
            </Grid>
        </Grid>

        <Grid container spacing={3}>
        
        <Grid item xs>
        <FormControl className={classes.formControl} id="machinecode" >
                <InputLabel id="select-label">Machine Code</InputLabel>
                <Select labelId="machineCode" id="machineCode" open={open}
                  onClose={handleClose} onOpen={handleOpen}
                  value={machineCode} onChange={handleChange}>
                  <MenuItem value=""></MenuItem>                  
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="usedHours" label="Hrs. Used" name="text" />
            </Grid>
            <Grid item xs>
            <TextField variant="outlined" margin="normal" fullWidth 
                            id="total" label="Total" name="text" />
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
            <Button variant="contained" color="primary" size="large" fullWidth
                className={classes.button} startIcon={<SaveIcon />} >
                Submit
            </Button>
            </Grid>
      </Grid>     
          <Box mt={5}>
            <Copyright />
          </Box>                      

            <Grid container></Grid>
            
            
          
        </form>
      </div>
    </Container>
    </div>
  );
}
