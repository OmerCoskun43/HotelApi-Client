/* eslint-disable react/prop-types */
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import { Footer } from "../components/Footer";
import HotelDetails from "../pages/HotelDetails";
import Profile from "../pages/Profile";
import Reservaiton from "../pages/Reservaiton";

const AppRouter = ({ search, setSearch }) => {
  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/reservation/:id" element={<Reservaiton />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<PrivateRouter />}>
          <Route path="" element={<Admin search={search} />}></Route>
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
