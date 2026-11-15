import React from "react";

export default function WhyChooseUs() {
  return (
    <div
      className="container-fluid px-lg-0"
      style={{
        background: "radial-gradient(circle at top, #1a1a2e, #0f172a)",
        color: "white",
      }}
    >
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Text Side */}
          <div className="col-lg-6 py-5">
            <div className="p-lg-5 ps-lg-0">
              <div className="bg-primary mb-3" style={{ width: "60px", height: "2px" }}></div>

              <h1 className="display-5 mb-4">Why Choose Us</h1>

              <p className="text-light mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.</p>

              <div className="row g-4">
                {/* Item 1 */}
                <div className="col-6">
                  <div className="d-flex align-items-center feature-box">
                    <div className="icon-box rounded-circle d-flex align-items-center justify-content-center">
                      <img src="img/icon/icon-7.png" className="img-fluid" alt="" />
                    </div>
                    <div className="ms-3">
                      <p className="text-primary mb-1">Trusted</p>
                      <h6 className="mb-0">Security</h6>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="col-6">
                  <div className="d-flex align-items-center feature-box">
                    <div className="icon-box rounded-circle d-flex align-items-center justify-content-center">
                      <img src="img/icon/icon-10.png" className="img-fluid" alt="" />
                    </div>
                    <div className="ms-3">
                      <p className="text-primary mb-1">Quality</p>
                      <h6 className="mb-0">Services</h6>
                    </div>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="col-6">
                  <div className="d-flex align-items-center feature-box">
                    <div className="icon-box rounded-circle d-flex align-items-center justify-content-center">
                      <img src="img/icon/icon-3.png" className="img-fluid" alt="" />
                    </div>
                    <div className="ms-3">
                      <p className="text-primary mb-1">Smart</p>
                      <h6 className="mb-0">Systems</h6>
                    </div>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="col-6">
                  <div className="d-flex align-items-center feature-box">
                    <div className="icon-box rounded-circle d-flex align-items-center justify-content-center">
                      <img src="img/icon/icon-2.png" className="img-fluid" alt="" />
                    </div>
                    <div className="ms-3">
                      <p className="text-primary mb-1">24/7 Hours</p>
                      <h6 className="mb-0">Support</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="col-lg-6">
            <img src="img/feature.png" alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
