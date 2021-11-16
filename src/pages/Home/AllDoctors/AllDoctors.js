import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";

import React, { useState, useEffect } from "react";

const AllDoctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => {
        setDoctors(data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h2>Our Doctors {doctors.length}</h2>
      <Container sx={{ my: 5 }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2}>
            {doctors?.map((doctor) => (
              <Grid key={doctor._id} item xs={12} sx={6} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={`data:imgae/jpeg;base64, ${doctor?.image}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {doctor?.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default AllDoctors;
