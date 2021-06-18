import Login from "./containers/Login/Login";
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
