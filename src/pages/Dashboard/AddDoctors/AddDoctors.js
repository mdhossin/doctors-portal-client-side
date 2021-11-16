import React, { useState } from "react";
import { Button, Input, TextField } from "@mui/material";

const AddDoctors = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    console.log(name, email, image);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("http://localhost:5000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
          if(data.insertedId){
              alert('Doctors added successfully')
          }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Add Doctors</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="text"
          label="Name"
          required
          onChange={(e) => setName(e.target.value)}
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%" }}
          id="standard-basic"
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <br />

        <Input
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
        />

        <br />
        <br />
        <Button variant="contained" type="submit">
          Add doctor
        </Button>
      </form>
    </div>
  );
};

export default AddDoctors;
