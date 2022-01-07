import React from "react";
import { Drawer, Login } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./routes/Routes";
import { useLocalContext } from "./context/context";

function App() {
  const { loggedInMail } = useLocalContext();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={loggedInMail}
          loggedInPath="/"
          path="/signin"
          exact
        >
          <Login />
        </IsUserRedirect>
      </Switch>
      <ProtectedRoute user={loggedInMail} path="/" exact>
        <Drawer />
      </ProtectedRoute>
    </Router>
  );
}

export default App;
