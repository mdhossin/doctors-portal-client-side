import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import chair from '../../../images/chair.png'
import Calender from "../../Shared/Calender/Calender";

const AppointmentHeader = ({date, setDate}) => {
 
  return (
    <Container sx={{mt: 5}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="div">
              Appointment
            </Typography>

            <Calender date={date} setDate={setDate}></Calender>
           
            
          </Grid>
          <Grid item xs={12} md={6}>
            <img style={{width: '100%'}} src={chair} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AppointmentHeader;
