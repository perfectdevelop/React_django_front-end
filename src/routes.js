import { Route, Switch } from "react-router";
// import { HashRouter } from "react-router-dom";
import React from "react";

import Login from './components/registration/login';
import Register from './components/registration/register';
import Dashboard from './components/pages/dashboard';
import Password_reset_form from "./components/registration/password_reset_form";

const Routes = () => {
    return (
        <React.Suspense
          fallback={<div className="loading-bar loading-bar--active"></div>}
        >
          <Switch>
            <React.Fragment>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/password_reset" component={Password_reset_form} />
            </React.Fragment>
          </Switch>
        </React.Suspense>
    );
};

export default Routes;