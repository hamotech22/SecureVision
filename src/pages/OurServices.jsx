import axios from "axios";
import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import db from "../../db.json";

export default function OurServices() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/OurServices").then((res) => {
      setServices(res.data);
    }).catch(() => {
      setServices(db.OurServices);
    });
  }, []);

  return (
    <div className="container-xxl py-5 h-100">
      <div className="container">
        <div className="text-center">
          <h1 className="display-5 mb-5">Our Services</h1>
        </div>

        <div className="row g-4">{services.length === 0 ? <h6 className="text-center text-danger">No data to show</h6> : services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
      </div>
    </div>
  );
}
