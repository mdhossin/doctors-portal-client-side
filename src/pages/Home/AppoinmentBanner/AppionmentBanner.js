import React from "react";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import doctor from "../../../images/doctor.png";
import bgImg from "../../../images/appointment-bg.png";

const appoinmentBg = {
  background: `url(${bgImg}) no-repeat center`,
  backgroundColor: "rgba(45, 58, 74, .9)",
  backgroundBlendMode: "darken, luminosity",
  marginTop: 150,
};

const AppionmentBanner = () => {
  return (
    <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <img
            style={{ width: 400, marginTop: "-115px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "left",
            color: 'white'
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "primary.main" }}
              component="div"
            >
              Appointment
            </Typography>
            <Typography variant="h4" component="div">
              Make an Appointment today
            </Typography>
            <Typography variant="p" component="div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              explicabo magni, et illum autem, unde enim impedit repellendus
              voluptates obcaecati excepturi eligendi omnis ipsum laborum
              consequuntur quia nisi blanditiis ex.
            </Typography>
            <Button sx={{mt: 2}} variant="contained">Learn More</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppionmentBanner;
