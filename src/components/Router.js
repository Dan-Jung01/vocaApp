import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import CreateWord from "routes/CreateWord";
import Day from "routes/Day";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <BrowserRouter>
      {isLoggedIn && <Navigation />}
      <div className='App'>
        <Switch>
          {isLoggedIn ? (
            <>
              <Route exact path='/'>
                <Home userObj={userObj} />
              </Route>
              <Route exact path='/day/:day'>
                <Day userObj={userObj} />
              </Route>
              <Route exact path='/profile'>
                <Profile />
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
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
