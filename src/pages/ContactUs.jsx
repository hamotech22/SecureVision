import React, { useState } from "react";

export default function ContactUs() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "", phone: "", textarea: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addData = () => {
    setData([...data, form]);
    console.log(form);
  };

  return (
    <div
      className="container-fluid px-lg-0 m-auto"
      style={{
        background: "radial-gradient(circle at top, #1a1a2e, #0f172a)",
        color: "white",
      }}
    >
      <div className="container quote px-lg-0">
        <div className="row g-0 mx-lg-0">
          {/* Image Side */}
          <div className="col-lg-6">
            <img src="img/quote.png" alt="" className="img-fluid w-100 h-100" style={{ objectFit: "cover" }} />
          </div>

          {/* Form Side */}
          <div className="col-lg-6 py-5">
            <div className="p-lg-5">
              <div className="bg-primary mb-3" style={{ width: "60px", height: "2px" }}></div>

              <h1 className="display-5 mb-4">Free Quote</h1>

              <p className="text-light mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>

              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" placeholder="Your Name" className="form-control form-dark" name="name" value={form.name} onChange={handleChange} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <input type="email" placeholder="Your Email" className="form-control form-dark" name="email" value={form.name} onChange={handleChange} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <input type="number" placeholder="Your Mobile" className="form-control form-dark" name="phone" value={form.name} onChange={handleChange} />
                  </div>

                  <div className="col-12 col-sm-6">
                    <select className="form-select form-dark">
                      <option>Select A Service</option>
                      <option>Service 1</option>
                      <option>Service 2</option>
                    </select>
                  </div>

                  <div className="col-12">
                    {/* <textarea placeholder="Special Note" className="form-control form-dark"name="textarea" value={form.name} onChange={handleChange}></textarea> */}
                    <input type="text" placeholder="special note" className="form-control form-dark" name="textarea" value={form.name} onChange={handleChange} />
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3 rounded-pill" onClick={addData}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
