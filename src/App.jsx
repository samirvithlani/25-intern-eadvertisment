import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { UserSidebar } from "./components/layouts/UserSidebar";
import { UserProfile } from "./components/user/UserProfile";
import { Login } from "./components/common/Login";
import { Signup } from "./components/common/Signup";
import { AgencySidebar } from "./components/layouts/AgencySidebar";
import { AddScreen } from "./components/agency/AddScreen";
import axios from "axios";
import "./assets/adminlte.css";
import "./assets/adminlte.min.css";
import PrivateRoutes from "./hooks/PrivateRoutes";
import LandingPage from "./components/common/LandingPage";

function App() {
  //axios.defaults.baseURL = "http://localhost:8000";
  axios.defaults.baseURL = "http://localhost:3000";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; // Remove the unwanted class for login and signup
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);

  return (
    <div
      className={
        location.pathname === "/login" || location.pathname === "/signup"
          ? ""
          : "app-wrapper"
      }
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element ={<LandingPage/>}></Route>

        <Route path="" element={<PrivateRoutes />}>
          <Route path="/user" element={<UserSidebar />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/agency" element={<AgencySidebar />}>
            <Route path="addscreen" element={<AddScreen />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
