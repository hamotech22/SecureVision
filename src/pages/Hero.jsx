import axios from "axios";
import React, { useEffect, useState } from "react";
import db from "../../db.json";

export default function Hero() {
  const [heroSlider, setHeroSlider] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3000/hero-sliders").then((res) => {
      setHeroSlider(res.data);
    }).catch(() => {
      setHeroSlider(db["hero-sliders"]);
    });
  }, []);

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {heroSlider.map((_, index) => (
          <button key={index} type="button" data-bs-target="#heroCarousel" data-bs-slide-to={index} className={index === 0 ? "active" : ""}></button>
        ))}
      </div>

      <div className="carousel-inner">
        {heroSlider.map((slide, index) => (
          <div key={slide.id || index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={slide.img} className="d-block w-100 hero-img" alt={slide.title || "slide"} />
            <div className="hero-overlay d-flex align-items-center justify-content-center text-center">
              <div>
                <h1 className="display-4 text-white mb-4">{slide.title}</h1>
                <p className="text-light mb-4">{slide.description}</p>
                <a className="btn btn-primary rounded-pill px-4 py-2 me-2">{slide.btn1 || "Read More"}</a>
                <a className="btn btn-light rounded-pill px-4 py-2">{slide.btn2 || "Free Quote"}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
