import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import classes from './App.module.scss';
import Home from './Home/Home';
import User from './User/User';

const App = () => {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/user/:id" component={User} />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
