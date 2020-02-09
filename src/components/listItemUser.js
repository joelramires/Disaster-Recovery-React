import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import BallotIcon from '@material-ui/icons/Ballot';
import CommuteIcon from '@material-ui/icons/Commute';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleAltIcon />
      </ListItemIcon>
      <ListItemText >
      <Link to="/dashboardUser" >Display TimeSheet</Link>
      </ListItemText>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CommuteIcon />
      </ListItemIcon>
      {/* <ListItemText primary="Machine Management" /> */}
      <Link to="/addtimesheet" >Create TimeSheet</Link>
    </ListItem>
    
  </div>
);
