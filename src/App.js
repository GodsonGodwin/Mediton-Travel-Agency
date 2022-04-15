import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ShowCase from "./components/ShowCase";
import Destination from "./components/Destination";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Plan from "./components/Plan";
import Profile from "./components/Profile";


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <div className="container">

        <Routes>
          <Route path="/" element={<><ShowCase/> <Destination/><Plan/></>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/> }/>
          <Route path="/profile" element={<Profile/> }/>

        </Routes>

        

        <Footer />

        </div>

        
      </Router>
    </>
  );
}

export default App;
