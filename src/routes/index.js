import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'

import { Context } from '../store'

function Routes() {
  const [state] = useContext(Context);

  return <Router>
    <Switch>
      <Route exact
        path="/">
        {!state.user ? <Login /> : <Dashboard />}
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  </Router>;
}

export default Routes;