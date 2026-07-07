import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import Services from "./pages/services/Services";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import UserRoute from "./routes/UserRoute";
import Dashboard from "./pages/user/Dashboard";
import Profile from "./pages/user/Profile";
import GovtSerList from "./pages/user/GovtSerList";
import GovtSerRegister from "./pages/admin/GovtSerRegister";
import AdminRoute from "./routes/AdminRoute";

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        {/* common routes start */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        {/* common routes end */}

        {/* user Route start */}
        <Route path="/user" element={<UserRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="govt-services-list" element={<GovtSerList />} />
        </Route>
        {/* user Route end */}

        {/* admin routes start */}

        {/* user Route start */}
        <Route path="/admin" element={<AdminRoute />}>
          <Route path="govt-ser-register" element={<GovtSerRegister />} />
          {/* <Route path="profile" element={<Profile />} />
          <Route path="govt-services-list" element={<GovtSerList />} /> */}
        </Route>

        {/* admin routes end */}
      </Routes>
    </>
  );
};

export default App;
