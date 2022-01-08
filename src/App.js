import React, { useEffect, useState } from "react";
import { Drawer, JoinedClasses, Login } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IsUserRedirect, ProtectedRoute } from "./routes/Routes";
import { useLocalContext } from "./context/context";
import db from "./lib/firebase";

function App() {
  const { loggedInMail } = useLocalContext();

  const [createdClasses, setCreatedClasses] = useState([]);
  const [joinedClasses, setJoinedClasses] = useState([]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("CreatedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
        });
      return () => unsubscribe();
    }
  }, [loggedInMail]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection("JoinedClasses")
        .doc(loggedInMail)
        .collection("classes")
        .onSnapshot((snapshot) => {
          setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
        });
      return () => unsubscribe();
    }
  }, [loggedInMail]);

  console.log(joinedClasses);
  console.log(createdClasses);

  return (
    <Router>
      <Switch>
        {createdClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <h1>Hello</h1>
            <p>{item.id}</p>
          </Route>
        ))}
        {joinedClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <h1>Hello</h1>
            <p>{item.id}</p>
          </Route>
        ))}
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
        <ol className="joined">
          {createdClasses.map((item) => (
            <JoinedClasses classData={item} />
          ))}

          {joinedClasses.map((item) => (
            <JoinedClasses classData={item} />
          ))}
        </ol>
      </ProtectedRoute>
    </Router>
  );
}

export default App;
