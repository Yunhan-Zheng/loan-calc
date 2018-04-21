import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

import Loading from './components/Loading';

const AsyncHome = Loadable({
                  
  
  
  
  loader: () => import("./containers/Home"),
    loading: 
    Loading});
// const AsyncLogin = asyncComponent(() => import("./containers/Login"));
// const AsyncNotes = asyncComponent(() => import("./containers/Notes"));
// const AsyncSignup = asyncComponent(() => import("./containers/Signup"));
// const AsyncNewNote = asyncComponent(() => import("./containers/NewNote"));
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute
      path="/"
      exact
      component={AsyncHome}
      props={childProps}
    />
    {/* <UnauthenticatedRoute
      path="/login"
      exact
      component={AsyncLogin}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={AsyncSignup}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/new"
      exact
      component={AsyncNewNote}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/notes/:id"
      exact
      component={AsyncNotes}
      props={childProps}
    /> */}
    {/* Finally, catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
;