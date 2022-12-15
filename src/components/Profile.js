import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Pagination from "@mui/material/Pagination";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [gyms, setGyms] = useState();
  const [count, setCount] = useState();
  let [page, setPage] = useState(1);
  let navigate = useNavigate();

  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    try {
      axios
        .get(
          `https://staging.algym.com/api/v1/gyms?lat=31.2475504&long=29.963676&page_number=1&page_size=1000&search_diameter=1000`
        )
        .then((res) => {
          setCount(Math.ceil(res.data.data.length / 10));
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios
        .get(
          `https://staging.algym.com/api/v1/gyms?lat=31.2475504&long=29.963676&page_number=${page}&page_size=${8}&search_diameter=1000`
        )
        .then((res) => {
          setGyms(res.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        background: "#c2c5c8",
        height: "100%",
      }}
    >
      <AppBar component="nav">
        <Toolbar style={{ background: "white" }} className="is-flex jcsb">
          <h1 style={{ color: "black" }}>ALGYM</h1>

          <div>
            <a
              style={{
                color: "red",
                marginRight: 20,
                cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
            >
              SIGN IN
            </a>

            <Button
              variant="contained"
              size={"large"}
              style={{
                background: "#dc3545",
                color: "white",
                height: 50,
              }}
              onClick={() => navigate("/signup")}
            >
              SIGN UP
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {gyms ? (
        <div style={{ padding: 100 }}>
          <Grid
            className="is-flex aic jcc"
            container
            direction="row"
            spacing={2}
          >
            {gyms.map((gym) => (
              <Grid item xs={3}>
                <Card sx={{}}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`${
                      gym.logo_img_url
                        ? gym.logo_img_url
                        : "https://staging.algym.com/static/media/gym_default.45d8c67a.svg"
                    }`}
                    // alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 28 }}
                      color="black"
                      gutterBottom
                    >
                      {gym.name}
                    </Typography>
                  </CardContent>
                  <div
                    className="is-flex aic jcc"
                    style={{
                      background: "#28a745",
                      width: "100%",
                      height: 50,
                      color: "white",
                    }}
                  >
                    HOT DEALS
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ) : (
        <div>LOADING...</div>
      )}
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </div>
  );
};

export default Profile;
