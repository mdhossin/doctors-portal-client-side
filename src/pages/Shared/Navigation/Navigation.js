import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
  const {user, logout} = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctors Portal
          </Typography>
          <Link style={{color:'white', textDecoration:'none'}} to="/home"><Button color="inherit">Home</Button></Link>

          <Link style={{color:'white', textDecoration:'none'}} to="/appointment"><Button color="inherit">Appointment</Button></Link>

         

          {
            user?.email ?
            <Box>
              <Link style={{color:'white', textDecoration:'none'}} to="/dashboard"><Button color="inherit">Dashboard</Button></Link>
              <Button onClick={logout} color="inherit">Logout</Button>
            </Box>
            :
            <Link style={{color:'white', textDecoration:'none'}} to="/login"><Button color="inherit">Login</Button></Link>
          }
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
