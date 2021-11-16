import { Alert, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import Booking from "../Booking/Booking";
import Typography from "@mui/material/Typography";

const booking = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    price : 25,
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10.05 AM - 11.30 AM",
    price : 20,
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "5.00 PM - 6.30 PM",
    price : 30,
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "7.30 AM - 8.30 AM",
    price : 19,
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    price : 35,
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "8.00 AM - 9.00 AM",
    price : 15,
    space: 10,
  },
];

const AvailableAppointments = ({ date }) => {
  const [bookingSuccess, setBookingSeccess] = useState(false)
  return (
    <Container>
      <Typography variant="h3" component="div">
        Available Appointment on {date.toDateString()}
      </Typography>

      {bookingSuccess && <Alert severity="success">Appointment Successfully done!</Alert>}

      <Grid container spacing={2} sx={{ my: 3 }}>
        {booking.map((book) => (
          <Booking
          setBookingSeccess ={setBookingSeccess}
           key={book.id} date={date} book={book} />
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointments;
