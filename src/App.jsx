import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { UserSidebar } from "./components/layouts/UserSidebar";
//import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { Route, Routes } from "react-router-dom";
import { UserProfile } from "./components/user/UserProfile";
import { Login } from "./components/common/Login";
import { Signup } from "./components/common/Signup";
import { AgencySidebar } from "./components/layouts/AgencySidebar";
import { AddScreen } from "./components/agency/AddScreen";
import axios from "axios";

function App() {
  
  axios.defaults.baseURL = "http://localhost:3000"

  return (
    <body class="layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded">
      <div className="app-wrapper">
        <Routes>
          <Route path="/login" element= {<Login/>}></Route>
          <Route path="/signup" element ={<Signup/>}></Route>
          <Route path="/user" element = {<UserSidebar/>}>
            <Route path="profile" element = {<UserProfile/>}></Route>
          </Route>
          <Route path ="/agency" element = {<AgencySidebar/>}>
            <Route path ="addscreen" element = {<AddScreen/>}></Route>
          </Route>
        </Routes>
      </div>
    </body>
  );
}

export default App;
