import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Copyright from './Media/copyright';
import { useUser } from './useUser';
import Dashboard from './dashboard';
import { AuthContext } from '../App';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1563062067-7700e1d9ae1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'right',
  },
  paper: {
    margin: theme.spacing(8, 4),
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
}));

export const SignInSide = (props) => {
  
  const { dispatch } = React.useContext(AuthContext);
  const initialState = {
    email:"",
    password:"",
    isSubmitting:false,
    errorMessage:null,
  }
  const [data, setData] = React.useState(initialState);
  const handleInputChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };
  const classes = useStyles();
  const { classes1 } = props;
  

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const { setAccessToken } = useUser();

  
  
 

 

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
 
  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }
 
  // function handleFormSubmit(event) {
  //   event.preventDefault();
    
  //   // fetch("https://localhost:8080/login")
  //   //   .then(res => res.json())
  //   //   .then(res => this.setState({ token: res }))
  //   //   .catch(() => this.setState({ hasErrors: true }));
  //   // Fetch the accessToken from the server
  //   // setAccessToken(JSON.stringify(token));
  //   setAccessToken('awesomeAccessToken123456789');
  // }
  
  const handleFormSubmit = event => {
    console.log("handleFormSubmit");
      event.preventDefault();
      setData({
        ...data,
        isSubmitting: true,
        errorMessage: null
      });
      fetch("http://localhost:8080/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          throw res;
        })  
        .then(resJson => {
          console.log(resJson)
          localStorage.setItem("token", resJson);
          console.log(localStorage.getItem("token"));
          // dispatch({
          //     type: "LOGIN",
          //     payload: resJson
          // })
        })
        .catch(error => {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: error.message || error.statusText
          });
        });
    };

  return (
    
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={1} md={8} className={classes.image} />
      <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Disaster Recovery
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleInputChange}
              value={data.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleInputChange}
              value={data.password}
            />
           
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >Sign In       
            {/* <Link to="/dashboard" role="button" color="inherit" aria-pressed="true">Sign In</Link> */}
            {/* <Link to="Dashboard">Sign In</Link> */}
            </Button>

            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button> */}
            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}

           <button disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                "Loading..."
              ) : (
                "Login"
              )}
            </button>

            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link to="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
            <Copyright />
          </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default SignInSide;