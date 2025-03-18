import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/home/Home";
import SignIn from "../pages/login/Login";
import SignUp from "../pages/signup/Signup";

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;