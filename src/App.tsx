import React from "react";
import LoginForm from "./containers/Login/LoginForm";
import Dashboard from "./containers/Dashboard/Dashboard";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={LoginForm}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
