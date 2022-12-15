import "./App.css";
import LogIn from "./components/LogIn.js";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
    </Routes>
  );
}

export default App;
