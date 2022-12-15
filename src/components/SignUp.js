import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const SignUp = () => {
  let navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 10,
        background: "#6610f2",
        height: "100vh",
      }}
    >
      <TextField
        variant="outlined"
        label="First Name"
        style={{
          background: "white",
          width: 450,
          marginBottom: 20,
          marginTop: 50,
        }}
      ></TextField>

      <TextField
        variant="outlined"
        label="Last Name"
        style={{
          background: "white",
          width: 450,
          marginBottom: 20,
        }}
      ></TextField>

      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
      >
        <h2 style={{ color: "white" }}>Birth day</h2>
        <input
          style={{ height: 50, width: 450 }}
          type="date"
          id="birthday"
          name="birthday"
        ></input>
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
      >
        <h2 style={{ color: "white" }}>Gender</h2>

        <select style={{ height: 50, width: 450 }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
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
        SIGN UP
      </Button>
    </div>
  );
};

export default SignUp;
