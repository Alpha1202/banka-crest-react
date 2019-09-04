import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserDashboard from '../views/userDashboard';
import HomePage from './homepage/index';
import AdminDashboard from '../views/adminDashboard';
import SignUp from '../views/signup';
import AdminLogin from '../views/adminLogin';
import 'react-toastify/dist/ReactToastify.css';


const App = () => (
  <React.Fragment>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/dashboard" component={UserDashboard} />
      <Route path="/admindashboard" component={AdminDashboard} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/adminlogin" component={AdminLogin} />
    </Switch>
  </React.Fragment>
);

export default App;
