import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React from 'react';
import Copyright from './Media/copyright';
import axios from 'axios';


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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 360,
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // const [role, setrole] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const initialState = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: ""
  });

  const [data, setData] = React.useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleFormSubmit = event => {
    console.log("handleFormSubmit");
      event.preventDefault();
      setData({
        ...data,
        isSubmitting: true,
        errorMessage: null
      });
      axios.post("http://localhost:8080/newUser", data)
      // .then(
      //   window.location.href = "http://localhost:3000/signin"
      // )
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Disaster Recovery Sign Up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleFormSubmit} >
        <TextField
            variant="outlined" margin="normal" required fullWidth
            name="firstName" label="First Name" type="text"
            id="firstName" autoComplete="firstName" autoFocus
            value={data.firstName} onChange={handleInputChange} />
        
        <TextField
            variant="outlined" margin="normal" required
            fullWidth name="lastName" label="Last Name"
            type="text" id="lastName" autoComplete="lastName"
            autoFocus value={data.lastName} onChange={handleInputChange} />
        
        <TextField
            variant="outlined" margin="normal" required
            fullWidth id="email" label="Email"
            name="email" autoComplete="email" autoFocus
            value={data.email} onChange={handleInputChange} />
        
        <TextField
            variant="outlined" margin="normal" required
            fullWidth name="password" label="Password"
            type="password" id="password" autoComplete="current-password"
            value={data.password} onChange={handleInputChange} />
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
              <Select
                labelId="roleLabel" id="role" open={open}
                onClose={handleClose} onOpen={handleOpen}
                value={data.role} onChange={handleInputChange}>
                <MenuItem value=""></MenuItem>
                <MenuItem value={1}>Admin</MenuItem>
                <MenuItem value={2}>Contractor</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create User
          </Button>
          <Grid container></Grid>
          <Box mt={5}>
        <Copyright />
      </Box>
        </form>
      </div>
      
    </Container>
  );
}