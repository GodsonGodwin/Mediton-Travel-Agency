import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Destination from "./components/Destination";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Route exact path="/">
          <ShowCase />
          <Destination/>
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>

        <Footer />
      </Router>
    </>
  );
}

export default App;
