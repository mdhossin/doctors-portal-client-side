import React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import Service from "../Service/Service";

const services = [
    {
        name: 'Flouride Treatment',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, odit accusantium ut possimus nulla sapiente magnam fuga a numquam ducimus inventore nihil quas quia dolorem veniam facilis aliquam veritatis?',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, odit accusantium ut possimus nulla sapiente magnam fuga a numquam ducimus inventore nihil quas quia dolorem veniam facilis aliquam veritatis?',
        img: cavity
    },
    {
        name: 'Treath Whitening',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, odit accusantium ut possimus nulla sapiente magnam fuga a numquam ducimus inventore nihil quas quia dolorem veniam facilis aliquam veritatis?',
        img: whitening
    }
]

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, m: '50px' }}>
      <Container>
      <Typography sx={{fontWeight: 'bold',color: 'primary.main'}} variant="h6" component="div">
          OUR SERVICES
        </Typography>
      <Typography sx={{fontWeight: '500', mb:'30px'}} variant="h3" component="div">
          Services We Provided
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services?.map((service, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Service service={service}></Service>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
