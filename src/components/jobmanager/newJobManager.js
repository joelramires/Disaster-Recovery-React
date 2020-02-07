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
// import GridItem from '../Grid/GridItem';


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

export default function NewJobManager(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [laborCode, setlaborCode] = useState({});

  // const [machineCode, setMachineCode] = React.useState("");

  // const initialState = {jobCode:'', jobDescription:'', maxHours:'', rateHourly:'' }
  // const [laborCode, setlaborCode] = useState(initialState);
  
  // const handleChange = event => {
  //   setlaborCode(event.target.value);

  // };

  function handleChange (event) {
    setlaborCode({...laborCode, [event.target.name]: event.target.value});
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

  async function handleDelete() { 
    try {
      await useAxios.delete(`http://localhost:8080/deleteJobManager/${props.match.params.id}`); 
      props.history.push("/jobManager"); 
    } catch(error) {
      console.error(error);
    }
  }
  // const handleDelete = async post => {
  //   await useAxios.delete('http://localhost:8080/deleteJobManager' + '/' + post.id);
  //   const posts = this.state.posts.filter(p => p.id !== post.id);
  //   this.setState({ posts });
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ListAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Job Code
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                                required fullWidth autoFocus
                                id="jobCode" label="Job Code" name="text" />
            </Grid>
            <Grid item xs={12} >
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="jobDescription" label="Description" name="text" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="rateHourly" label="Hourly Rate" name="text" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" margin="normal"
                            required fullWidth 
                            id="maxHours" label="Max Hour" name="text" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button type="reset" fullWidth
                variant="contained" color="secondary" className={classes.reset}
                startIcon={<RefreshIcon />} size="large" fullWidth >
                Reset
            </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" size="large" fullWidth
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
