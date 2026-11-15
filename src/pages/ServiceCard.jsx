import React from "react";

export default function ServiceCard({ service }) {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div
        className="h-100 p-4 text-center service-card"
        style={{
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "15px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Icon */}
        <div
          className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle"
          style={{
            width: "70px",
            height: "70px",
            background: "rgba(0,0,0,0.3)",
          }}
        >
          <img className="img-fluid" src={service.img} alt="Icon" />
        </div>

        {/* Title */}
        <h5 className="mb-3">{service.title}</h5>

        {/* Description */}
        <p className="text-light small mb-4">{service.description}</p>

        {/* Button */}
        <a className="btn btn-primary rounded-pill px-4 mt-auto" href="">
          Read More
        </a>
      </div>
    </div>
  );
}
