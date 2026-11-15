import React from "react";
import Layout from "./pages/Layout";
import ContactUs from "./pages/ContactUs";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import OurServices from "./pages/OurServices";
import Page404 from "./pages/Page404";
import TeamMembers from "./pages/TeamMembers";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter> {/* ✅ لف كل حاجة هنا */}
      <div className="app-container">
        
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* بدل /home */}
            <Route path="about" element={<About />} />
            <Route path="service" element={<OurServices />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="team" element={<TeamMembers />} />
            <Route path="*" element={<Page404 />} />
            <Route path="footer" element={<Footer />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
