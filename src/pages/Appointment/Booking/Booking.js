import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ book, date,setBookingSeccess }) => {
  const { name, time, space } = book;

  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return (
      <>
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={1} sx={{ p: 3 }}>
        <Typography variant="h4" component="div">
          {name}
        </Typography>
        <Typography variant="h6" component="div">
          {time}
        </Typography>
        <Typography variant="p" component="div">
          {space} space Available
        </Typography>
        <Button onClick={handleModalOpen} sx={{ mt: 2 }} variant="contained">
          Book Appointment
        </Button>
      </Paper>
    </Grid>
    <BookingModal 
    setBookingSeccess={setBookingSeccess}
    date={date}
    booking={book}
    modalOpen={modalOpen}
    handleModalClose={handleModalClose}
    ></BookingModal>
    </>
  );
};

export default Booking;
