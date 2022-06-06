import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Pest_detils from "./Pages/Pest_detils";
import Aboutus from "./Pages/aboutus";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cropsseason from "./Pages/crops_season";

function App() {
  const useremail = localStorage.getItem("email");

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Pest_detils" element={<Pest_detils />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="crops_season" element={<Cropsseason />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
