import axios from "axios";
import React, { useEffect, useState } from "react";
import db from "../../db.json";

export default function Footer() {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/address").then((res) => {
      setAddress(res.data);
      console.log(res.data);
    }).catch(() => {
      setAddress(db.address);
    });
  }, []);

  return (
    <div
      className="container-fluid py-5"
      style={{
        background: "radial-gradient(circle at top, #1a1a2e, #0f172a)",
        color: "white",
      }}
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Address */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Address</h5>

            <p className="text-light mb-2">
              <i className="fa fa-map-marker-alt me-2 text-primary"></i>
              {address[0]?.address}
            </p>

            <p className="text-light mb-2">
              <i className="fa fa-phone-alt me-2 text-primary"></i>
              {address[0]?.phone}
            </p>

            <p className="text-light mb-3">
              <i className="fa fa-envelope me-2 text-primary"></i>
              {address[0]?.email}
            </p>

            <div className="d-flex gap-2">
              <a className="text-white fs-5" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a className="text-white fs-5" href="#">
                <i className="fab fa-twitter"></i>
              </a>

              <a className="text-white fs-5" href="#">
                <i className="fab fa-youtube"></i>
              </a>

              <a className="text-white fs-5" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Services</h5>

            <a className="text-white text-decoration-none d-block mb-2" href="#">
              Business Security
            </a>

            <a className="text-white text-decoration-none d-block mb-2" href="#">
              Fire Detection
            </a>

            <a className="text-white text-decoration-none d-block mb-2" href="#">
              Alarm Systems
            </a>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>

            <a className="text-white text-decoration-none d-block mb-2" href="#">
              About Us
            </a>

            <a className="text-white text-decoration-none d-block mb-2" href="#">
              Contact Us
            </a>

            <a className="text-white text-decoration-none d-block mb-2" href="#">
              Our Services
            </a>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Newsletter</h5>

            <p className="text-light">Subscribe to get updates</p>

            <div className="position-relative">
              <input className="form-control" type="email" placeholder="Your email" />

              <button className="btn btn-primary position-absolute top-0 end-0 mt-1 me-1">SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
