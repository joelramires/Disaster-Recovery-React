import React from 'react';
import SignInSide from './components/signin'
import Dashboard from './components/dashboard';
import SignUp from './components/signup';
import AddTimeSheet from './components/timesheet/newTimeSheet';
import ApprovalTimesheet from './components/timeSheetData'
import { Switch,Route,Redirect } from "react-router-dom";
import HomePage from './components/homePage'
import JobManager from './components/jobmanager/newJobManager';
import MachineManager from './components/machinemanager/newMachineManager';
import { UserProvider } from './components/useUser';
import JobData  from './components/JobData';
import JobDataDelete from'./components/JobData';
import MachineData from './components/MachineData';
import editMachine from './components/machinemanager/editMachine';
import editJob from './components/jobmanager/editJob';
import userTimesheet from './components/userTimesheet';
import axios from 'axios';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
}
axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.getItem("token");
      // console.log(action.payload.user)
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};


function App() {
 
  const [state, dispatch] = React.useReducer(reducer, initialState);
 
  return (
    <React.Fragment>
    <AuthContext.Provider
    value={{
      state,
      dispatch
    }}>
    <div>
      <Switch>
      <Route path="/jobData/:id" exact component={JobDataDelete}></Route>
        <Route path="/newMachineManager" exact component={MachineManager}></Route>
        <Route path="/newJobManager" exact component={JobManager}></Route>
        <Route path="/machineManager/:id" exact component={editMachine}></Route>
        <Route path="/getJobManager/:id" exact component={editJob}></Route>
        <Route path="/timesheet" exact component={ApprovalTimesheet}></Route>
        <Route path="/userTimesheet" exact component={userTimesheet}></Route>
        <Route path="/addtimesheet" exact component={AddTimeSheet}></Route>
        <Route path="/jobData" exact component={JobData}></Route>
        <Route path="/machineData" exact component={MachineData}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/signin" exact component={SignInSide}></Route>
        <Route path="/" exact component={HomePage}></Route>
            {/* <Redirect to ="/not-found" /> */}
      </Switch>

    </div>
    </AuthContext.Provider>
    </React.Fragment>
  );
}

export default App;
