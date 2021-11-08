import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth'

const Appointments = ({date}) => {
        const {user, token} = useAuth()
        // console.log(user);
        const [appointments, setAppointments] = useState()

       console.log(appointments);

        useEffect(() => {
            fetch(`https://morning-waters-50302.herokuapp.com/appointments?email=${user?.email}&date=${date.toLocaleDateString()}`,{
              headers: {
                'authorization': `Bearer ${token}`
              }
            })
            .then(res => res.json())
            .then(data => setAppointments(data))
        }, [date, user.email, token])

     
  return (
    <div>
      <Typography sx={{ textAlign: "center" }} variant="h2" gutterBottom>
        Appointments : {appointments?.length}
      </Typography>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Patient Name</TableCell>
            <TableCell >Time</TableCell>
            <TableCell >Service Name</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell >{row.time}</TableCell>
              <TableCell >{row.serviceName}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  );
};

export default Appointments;
