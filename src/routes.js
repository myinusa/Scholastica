import React from "react";
import { Route } from "react-router-dom";
import App from "./App";
import SignIn from "./signin/SignIn";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={SignIn} />
      <Route path="/home" component={App} />
      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
      {/* redirect user to SignIn page if route does not exist and user is not authenticated */}
      {/* <Route component={SignIn} /> */}
    </div>
  );
}
