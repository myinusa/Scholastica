import React from "react";
import { Switch, Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Routes from "./routes";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
// import * as serviceWorker from "./serviceWorker";
import "./index.css";
import App from "./App";
import SignIn from "./signin/SignIn";

const history = createHistory();

// import Bottom from "./bottom/Bottom";
// import SignIn from "./signin/SignIn";
// import Dashboard from "./dashboard/Dashboard";

//ReactDOM.render(<Bottom />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
//ReactDOM.render(<SignIn />, document.getElementById("root"));
//ReactDOM.render(<Dashboard />, document.getElementById("root"));

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
