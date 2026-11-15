import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from '../../db.json';

export default function Navbar() {
  const [address, setAddress]=useState([]);
  useEffect(() =>{
    axios.get("http://localhost:3000/address").then((res) =>{
      setAddress(res.data);
    }).catch(() => {
      setAddress(db.address);
    })
  },[]);
  
  return (
    <>

    {/* Topbar */}
    <div 
      className="container-fluid text-light px-5"
      style={{ background: "#0f172a" }}
    >
      <div className="row d-none d-lg-flex">

        <div className="col-lg-6 text-start">

          <div className="d-inline-flex align-items-center py-3 me-4">
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            <small> {address[0]?.address}</small>
          </div>

          <div className="d-inline-flex align-items-center py-3">
            <i className="fa fa-envelope-open text-primary me-2"></i>
            <small> {address[0]?.email}</small>
            
          </div>

        </div>

        <div className="col-lg-6 text-end">

          <div className="d-inline-flex align-items-center py-3 me-4">
            <i className="fa fa-phone-alt text-primary me-2"></i>
            <small>{address[0]?.phone}</small>
          </div>

          <div className="d-inline-flex align-items-center py-3">
            <i className="far fa-clock text-primary me-2"></i>
            {/* <small>Mon - Fri : 9AM - 9PM</small> */}
              {new Date().toLocaleTimeString("en-US")}
          </div>

        </div>

      </div>
    </div>

    {/* Main Navbar */}
    <nav 
      className="navbar navbar-expand-lg sticky-top px-4 px-lg-5"
      style={{
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >

      <a href="#" className="navbar-brand">
        <h2 className="m-0 text-primary">SecureVision</h2>
      </a>

      <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">

        <div className="navbar-nav ms-auto py-3">

          <Link to="/" className="nav-link text-white">Home</Link>
          <Link to="about" className="nav-link text-white">About</Link>
          <Link to="service" className="nav-link text-white">Service</Link>
          {/* <a href="#" className="nav-link text-white">Project</a>  */}

          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu">
              <Link to="team" className="dropdown-item">Team</Link>
              <a className="dropdown-item" href="#">Testimonial</a>
            </div>
          </div>

          <Link to="contact" className="nav-link text-white">Contact</Link>

        </div>

        {/* Social Icons */}
        <div className="d-none d-lg-flex ms-3 gap-2">

          <a className="social-icon" href="#"><i className="fab fa-facebook-f"></i></a>
          <a className="social-icon" href="#"><i className="fab fa-twitter"></i></a>
          <a className="social-icon" href="#"><i className="fab fa-linkedin-in"></i></a>
          <a className="social-icon" href="#"><i className="fab fa-instagram"></i></a>

        </div>

      </div>

    </nav>

    </>
  )
}