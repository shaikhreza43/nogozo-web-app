import { Avatar } from "@mui/material";
import React from "react";

export default function CoursesCard(props) {
  return (
    <div className="outer-div-courses">
      <div className="card" style={{ width: "10rem",display:'flex',justifyContent:'center',alignItems:'center',padding:'8px' }}>
        <p>9</p>
        <div className="card-body">
          <p className="card-text">
            Class IX
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "10rem",display:'flex',justifyContent:'center',alignItems:'center',padding:'8px' }}>
        <p>10</p>
        <div className="card-body">
          <p className="card-text">
            Class X
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "10rem",display:'flex',justifyContent:'center',alignItems:'center',padding:'8px' }}>
        <p>11</p>
        <div className="card-body">
          <p className="card-text">
            Class XI
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "10rem",display:'flex',justifyContent:'center',alignItems:'center',padding:'8px' }}>
        <p>12</p>
        <div className="card-body">
          <p className="card-text">
            Class XII
          </p>
        </div>
      </div>
      <div className="card" style={{ width: "10rem",display:'flex',justifyContent:'center',alignItems:'center',padding:'8px' }}>
        <p>1-8</p>
        <div className="card-body">
          <p className="card-text">
            Class 1-8
          </p>
        </div>
      </div>
    </div>
  );
}
