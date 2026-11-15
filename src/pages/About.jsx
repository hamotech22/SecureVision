import React from "react";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-6 col-lg-4">
              <div
                className="h-100 p-4 p-xl-5 service-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <img className="img-fluid" src="/img/icon/icon-3.png" alt="Icon" />
                  </div>

                  <h1 className="display-1 mb-0" style={{ color: "#3b82f6" }}>
                    01
                  </h1>
                </div>

                <h5>Home Security</h5>
                <hr className="w-25 border-light" />
                <span className="text-light">Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 col-lg-4">
              <div
                className="h-100 p-4 p-xl-5 service-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <img className="img-fluid" src="/img/icon/icon-4.png" alt="Icon" />
                  </div>

                  <h1 className="display-1 mb-0" style={{ color: "#3b82f6" }}>
                    02
                  </h1>
                </div>

                <h5>Access Control</h5>
                <hr className="w-25 border-light" />
                <span className="text-light">Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-6 col-lg-4">
              <div
                className="h-100 p-4 p-xl-5 service-card"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "rgba(0,0,0,0.3)",
                    }}
                  >
                    <img className="img-fluid" src="/img/icon/icon-2.png" alt="Icon" />
                  </div>

                  <h1 className="display-1 mb-0" style={{ color: "#3b82f6" }}>
                    03
                  </h1>
                </div>

                <h5>24/7 Support</h5>
                <hr className="w-25 border-light" />
                <span className="text-light">Vero elitr justo clita lorem ipsum dolor at sed stet sit diam rebum ipsum</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        className="container-fluid my-5 px-lg-0"
        style={{
          background: "radial-gradient(circle at top, #1a1a2e, #0f172a)",
          color: "white",
        }}
      >
        <div className="container about px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6" style={{ minHeight: "400px" }}>
              <div className="position-relative h-100">
                <img className="position-absolute img-fluid w-100 h-100" src="/img/about.png" style={{ objectFit: "cover" }} alt="About" />
              </div>
            </div>

            <div className="col-lg-6 py-5">
              <div className="p-lg-5">
                <div className="bg-primary mb-3" style={{ width: "60px", height: "2px" }}></div>

                <h1 className="mb-4">About Us</h1>

                <p className="mb-4 text-light">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>

                <a href="" className="btn btn-primary rounded-pill py-3 px-5">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
