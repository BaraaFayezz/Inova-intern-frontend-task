import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "react-phone-number-input/style.css";
import TextField from "@mui/material/TextField";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const myUser = localStorage.getItem(email);

  let navigate = useNavigate();
  const handleLogIn = () => {
    if (myUser) {
      if (JSON.parse(myUser).password === password) {
        navigate("/profile");
        localStorage.setItem("logged_in", true);
        localStorage.setItem("username", JSON.parse(myUser).username);
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("User Not Found");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 20,
        background: "#6610f2",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "white" }}>SIGN IN</h1>
      <Button
        variant="contained"
        size={"large"}
        style={{
          background: "#FFF",
          color: "black",
          width: 450,
          marginBottom: 20,
        }}
      >
        CONTINUE WITH FACEBOOK
      </Button>
      <Button
        variant="contained"
        size={"large"}
        style={{
          background: "#FFF",
          color: "black",
          width: 450,
          marginBottom: 20,
        }}
      >
        CONTINUE WITH TWITTER
      </Button>
      <Button
        variant="contained"
        size={"large"}
        style={{
          background: "#FFF",
          color: "black",
          width: 450,
          marginBottom: 20,
        }}
      >
        CONTINUE WITH GOOGLE
      </Button>
      <Button
        variant="contained"
        size={"large"}
        style={{
          background: "#FFF",
          color: "black",
          width: 450,
          marginBottom: 20,
        }}
      >
        CONTINUE WITH APPLE
      </Button>
      <h3 style={{ marginBottom: 20 }}>OR</h3>
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        type="number"
        style={{ background: "white", width: 450, marginBottom: 20 }}
      ></TextField>
      <TextField
        variant="outlined"
        id="outlined-password-input"
        label="Password"
        type="password"
        style={{ background: "white", width: 450, marginBottom: 20 }}
      ></TextField>
      <Button
        variant="contained"
        size={"large"}
        style={{
          background: "#dc3545",
          color: "white",
          width: 300,
          height: 50,
          marginBottom: 20,
        }}
        onClick={() => navigate("/profile")}
      >
        SIGN IN
      </Button>

      <div style={{ color: "white" }}>
        New user?{" "}
        <a style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
          Signup
        </a>
      </div>
    </div>
  );
};

export default LogIn;
