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
import { Link } from "react-router-dom";
import login from "../../../images/login.png";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  // console.log(loginData);

  const {
    user,
    loginWithEmailAndPassword,
    signInWithGoolge,
    authError,
    isLoading,
  } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  // get the input value onchange on form submit
  const handelOnChange = (e) => {
    const inputField = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[inputField] = value;
    setLoginData(newLoginData);
  };
  // form onsumbit
  const handelLoginSubmit = (e) => {
    loginWithEmailAndPassword(
      loginData.email,
      loginData.password,
      location,
      navigate
    );
    e.preventDefault();
  };

  // sign in with google
  const handelGoogleSignIn = () => {
    signInWithGoolge(location, navigate)
  }

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 12 }} item xs={12} md={6}>
          <Typography sx={{ textAlign: "center" }} variant="body1" gutterBottom>
            Login
          </Typography>

          <form onSubmit={handelLoginSubmit}>
            <TextField
              sx={{ width: "70%" }}
              id="standard-basic"
              name="email"
              type="email"
              onBlur={handelOnChange}
              label="Your Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "70%" }}
              id="standard-basic"
              name="password"
              onBlur={handelOnChange}
              label="Password"
              type="password"
              variant="standard"
            />
            <Button
              sx={{ width: "70%", mt: 2 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <Link to="/register">
              <Button sx={{ width: "70%", mt: 2 }} variant="text">
                New user? Please Register
              </Button>
            </Link>
            
          </form>
          <p>-----------OR--------------</p>
          <Button onClick={handelGoogleSignIn} sx={{ width: "70%", mt: 2 }} variant="contained">
            Sign In with google
          </Button>

          {isLoading && <CircularProgress />}

          {user?.email && <Alert severity="success">Login Successfully!</Alert>}

          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
