import React, { useState } from "react";
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
import Navbar from '../Navbar';
import Drawer from '../Drawer';
import Alert from '@material-ui/lab/Alert';
import validate from '../Validation/ValidationRules';


const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    fixedHeight: {
      height: 240,
    },
  }));

export default function NewMachineManager() {
  const classes = useStyles();

  const initialState = {
    machineCode:"",
    description:"",
    rate:"",
    maxHours:"",
  }

  const [errors, setErrors] = useState(initialState);
  const [data, setData] = React.useState(initialState);
  
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
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
      console.log(data.machineCode);
      axios.post("http://localhost:8080/newMachineManager", data)
      .then(
        window.location.href = "http://localhost:3000/dashboard"
      ) 
    };

  return (
    <React.Fragment>
    <div className={classes.root}>
    <CssBaseline />
    <Navbar />
    <main className={classes.content}>
    <Container className={classes.container} maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Machine Code
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                                required fullWidth
                                id="machineCode" label="Machine Code" name="machineCode" onChange={handleInputChange}
                                value={data.machineCode}/>
              {errors.machineCode && (
                    <Alert severity="error">{errors.machineCode}</Alert>
                  )}
            </Grid>
            <Grid item xs={12} >
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="description" label="Description" name="description" onChange={handleInputChange}
                            value={data.description}/>
              {errors.description && (
                    <Alert severity="error">{errors.description}</Alert>
                  )}
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth type="number"
                            id="rate" label="Hourly Rate" name="rate" onChange={handleInputChange}
                            value={data.rate}/>
              {errors.rate && (
                    <Alert severity="error">{errors.rate}</Alert>
                  )}
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth type="number"
                            id="maxHours" label="Max Hour Per Day" name="maxHours" onChange={handleInputChange}
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
                disabled={(data.machineCode == '' || data.description == '' || data.rate == '' || 
            data.maxHours == '') ? true : false} >
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
    </main>
    </div>
    </React.Fragment>
  );
}
