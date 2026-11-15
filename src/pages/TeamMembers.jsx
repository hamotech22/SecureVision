import axios from "axios";
import React, { useEffect, useState } from "react";
import db from "../../db.json";

export default function TeamMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/TeamMembers").then((res) => {
      setMembers(res.data);
    }).catch(() => {
      setMembers(db.TeamMembers);
    });
  }, []);

  return (
    <div className="container-xxl py-5" style={{ background: "#0f172a", color: "white" }}>
      <div className="container">
        {/* Title */}
        <div className="text-center mb-5">
          <div className="mx-auto mb-3" style={{ width: "60px", height: "2px", background: "#3b82f6" }}></div>
          <h1 className="display-5 text-white">Team Members</h1>
        </div>

        <div className="row g-4">
          {members.length === 0 ? (
            <h6 className="text-center text-danger">No data to show</h6>
          ) : (
            members.map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6">
                <div
                  className="p-3 rounded h-100"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div className="mb-3">
                    <img
                      src={member.img}
                      className="img-fluid rounded w-100"
                      style={{ height: "220px", objectFit: "cover" }}
                      alt={member.name}
                    />
                  </div>

                  <div className="text-center">
                    <h5 className="text-white mb-1">{member.name}</h5>
                    <span style={{ color: "#3b82f6" }}>{member.position}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
