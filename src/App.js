import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import AddDoctors from "./pages/Dashboard/AddDoctors/AddDoctors";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./pages/Dashboard/Payment/Payment";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/home" element={<Home />}></Route>

            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  {" "}
                  <Appointment />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<DashboardHome />}></Route>
              <Route
                path={`/dashboard/payment/:appointmentId`}
                element={<Payment />}
              ></Route>

              <Route
                path={`/dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/dashboard/addDoctors`}
                element={
                  <AdminRoute>
                
                    <AddDoctors />
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
