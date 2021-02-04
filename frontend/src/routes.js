import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import login from './pages/login';
import dashboard from './pages/dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={login}/>
        <Route path="/dashboard" component={dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}
