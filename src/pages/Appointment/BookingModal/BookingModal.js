import React, { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BookingModal = ({ modalOpen, handleModalClose, booking, date,setBookingSeccess }) => {
  const { name, time,price } = booking;
  const { user } = useAuth();
  // console.log(user);

  const initializeBookingInfo = {
    patientName: user.displayName,
    email: user.email,
    phoneNumber: "",
  };

  const [bookingInfo, setBookingInfo] = useState(initializeBookingInfo);

  // get the all form data
  const handelOnBlurChange = (e) => {
    const inputField = e.target.name;
    const value = e.target.value;
    const newBookingInfo = { ...bookingInfo };
    newBookingInfo[inputField] = value;
    // console.log(newBookingInfo);
    setBookingInfo(newBookingInfo)
  };

  const handelBookingSubmit = (e) => {
    //   collect data 

    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString()
    };

    // send to the server

    fetch('https://morning-waters-50302.herokuapp.com/appointments',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(appointment)
    }).then(res => res.json())
    .then(data => {
      if(data.insertedId){
        setBookingSeccess(true)
        handleModalClose();
      }
    })
    // console.log(appointment);
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modalOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <Box sx={style}>
            <Typography
              sx={{ textAlign: "center" }}
              id="transition-modal-title"
              variant="h5"
              component="h2"
            >
              {name}
            </Typography>

            <form onSubmit={handelBookingSubmit}>
              <TextField
                sx={{ width: "90%", m: 1 }}
                disabled
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                name="patientName"
                onBlur={handelOnBlurChange}
                id="outlined-size-small"
                defaultValue={user?.displayName}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                name="email"
                onBlur={handelOnBlurChange}
                id="outlined-size-small"
                defaultValue={user?.email}
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                required
                name="phoneNumber"
                onBlur={handelOnBlurChange}
                id="outlined-size-small"
                // defaultValue="Phone Number"
                placeholder="Your Phone"
                size="small"
              />
              <TextField
                sx={{ width: "90%", m: 1 }}
                disabled
                id="outlined-size-small"
                defaultValue={date.toDateString()}
                size="small"
              />
              <Button type="submit" sx={{ width: "30%" }} variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingModal;
