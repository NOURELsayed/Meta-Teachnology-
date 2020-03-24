import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Welcome from "./pages/welcome";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import SignUpContextProvider from "./context/SignUpContext";
import AuthContextProvider from "./context/AuthContext";
export default function Routing() {
  return (
    <Router>
      <AuthContextProvider>
        <SignUpContextProvider>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>

            <Route exact path="/games">
              <Games />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>

            <Route path="/signin">
              <SignIn />
            </Route>

            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </SignUpContextProvider>
      </AuthContextProvider>
    </Router>
  );
}
