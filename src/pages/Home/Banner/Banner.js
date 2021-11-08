import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";

const Banner = () => {
  const bannerBg = {
    background: `url(${bg}) center`,
    height: '100%'
   
  };
  const vericalAlign = {
    display: "flex",
    alignItems: "center",
    height: 400,
  };
  return (
    <Box style={bannerBg} sx={{ flexGrow: 1 }}>
      <Container style={{marginTop: '100px'}}>
        <Grid container spacing={5}>
         
            <Grid item xs={12} md={6} sx={{ textAlign: "left" }} style={vericalAlign}>
            <Box>
            <Typography variant="h2" component="div">
                Your new smile starts here
              </Typography>
              <Typography variant="p" component="div">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
                excepturi dolorem impedit repellendus blanditiis dicta possimus
                saepe dolores amet sapiente illum ipsam corrupti adipisci,
                laudantium alias corporis. Voluptatem, facere impedit?
              </Typography>
              <Button sx={{ mt: 2 }} variant="contained">
                Get Appointment
              </Button>
            </Box>
            </Grid>
         
          <Grid item xs={12} md={6} style={vericalAlign}>
            <img style={{ width: "500px" }} src={chair} alt="" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
