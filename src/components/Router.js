import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import CreateWord from "routes/CreateWord";
import Day from "routes/Day";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <Router>
      {isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path='/'>
              <Home userObj={userObj} />
            </Route>
            <Route exact path='/profile'>
              <Profile />
            </Route>
            <Route path='/day/:day'>
              <Day userObj={userObj} />
            </Route>
            <Route path='/create_word/:day'>
              <CreateWord userObj={userObj} />
            </Route>
          </>
        ) : (
          <Route exact path='/'>
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
