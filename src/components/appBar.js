import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MemoryIcon from '@material-ui/icons/Memory';
import { Link } from "react-router-dom";

import { useUser } from './useUser';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  const { user, setAccessToken } = useUser();
  const { classes1 } = props;

  function logout() {
    setAccessToken(null);
  }

  return (  
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MemoryIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Disaster Recovery
          </Typography>
          {/* <Link to="signIn" class="btn btn-info btn-lg" role="button" color="inherit" aria-pressed="true">Login</Link>   */}
          <Typography variant="h6" color="inherit" className={classes.grow}>
          {user.name ? user.name : <Link to="signIn" class="btn btn-info btn-lg" role="button" color="inherit" aria-pressed="true">Login</Link>}
        </Typography>
        {user.name && <Button class="btn btn-info btn-lg ml-3" onClick={logout}>Log Out</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
