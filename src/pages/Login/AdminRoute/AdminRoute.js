import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";


const AdminRoute = ({ children, ...rest }) => {
  const {user,admin, isLoading} = useAuth();
  let location = useLocation()
  if(isLoading){
      return <CircularProgress></CircularProgress>
  }
  if(user?.email && admin){
   return children
  } 
  return <Navigate to="/home" state={{ from: location }} />;
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user?.email && admin ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/home",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
};

export default AdminRoute;
