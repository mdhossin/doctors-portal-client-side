import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, authError } = useAuth();

  const navigate = useNavigate();

  const handelOnBlur = (e) => {
    const inputField = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[inputField] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };

  const handelLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, navigate);
    e.preventDefault();
  };
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 12 }} item xs={12} md={6}>
          <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom>
            Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handelLoginSubmit}>
              <TextField
                sx={{ width: "70%" }}
                id="standard-basic"
                name="name"
                onBlur={handelOnBlur}
                label="Your Name"
                variant="standard"
              />
              <TextField
                sx={{ width: "70%" }}
                id="standard-basic"
                name="email"
                type="email"
                onBlur={handelOnBlur}
                label="Your Email"
                variant="standard"
              />
              <TextField
                sx={{ width: "70%" }}
                id="standard-basic"
                name="password"
                onBlur={handelOnBlur}
                label="Password"
                type="password"
                variant="standard"
              />
              <TextField
                sx={{ width: "70%" }}
                id="standard-basic"
                name="password2"
                onBlur={handelOnBlur}
                label="Confrim Password"
                type="password"
                variant="standard"
              />

              <Button
                sx={{ width: "70%", mt: 2 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <Link to="/login">
                <Button sx={{ width: "70%", mt: 2 }} variant="text">
                  Already Registerd? Please Login
                </Button>
              </Link>
            </form>
          )}

          {isLoading && <CircularProgress />}

          {user?.email && (
            <Alert severity="success">User Account Created Successfully!</Alert>
          )}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
