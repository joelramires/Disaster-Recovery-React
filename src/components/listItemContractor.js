import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Link } from "react-router-dom";
import BallotIcon from '@material-ui/icons/Ballot';


export const contractorListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <BallotIcon />
      </ListItemIcon>
      <Link to="contractorDashboard" >Timecard Submission</Link>
    </ListItem>
    
  </div>
);
