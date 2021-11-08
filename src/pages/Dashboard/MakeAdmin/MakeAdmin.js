import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  //   console.log(email);
  const [success, setSuccess] = useState(false);
  // get jwt token from useauth
  const { token } = useAuth();

  const handelOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://morning-waters-50302.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        'authorization': `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setEmail("");
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <h2>Admin panel</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "60%" }}
          id="standard-basic"
          type="email"
          onBlur={handelOnChange}
          label="Your Email"
          variant="standard"
        />

        <Button sx={{ width: "60%", mt: 2 }} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin created Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
