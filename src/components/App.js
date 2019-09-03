import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast';
import { ToastContainer } from 'react-toastify';
import ReduxToastr from 'react-redux-toastr';
import Homepage from '../views/Homepage';

const App = () => (
  <React.Fragment>
    <Switch>
      <Route to="/" component={Homepage} />
    </Switch>
  </React.Fragment>
);

export default App;
