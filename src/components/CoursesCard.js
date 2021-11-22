import { Avatar } from "@mui/material";
import React from "react";

export default function CoursesCard(props) {
  return (
    <>
      <div className="outer-div-courses">
        <div
          className="card"
          style={{
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <h5>9</h5>
          <div className="card-body">
            <p className="card-text">Class IX</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <h5>10</h5>
          <div className="card-body">
            <p className="card-text">Class X</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <h5>11</h5>
          <div className="card-body">
            <p className="card-text">Class XI</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <h5>12</h5>
          <div className="card-body">
            <p className="card-text">Class XII</p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "10rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <h5>1-8</h5>
          <div className="card-body">
            <p className="card-text">Class 1-8</p>
          </div>
        </div>
      </div>
      {/* New ROw */}
      <div className="row mt-5">
        <div className="outer-div-courses">
          <div
            className="card"
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <b>IIT</b>
            <div className="card-body">
              <p className="card-text">IIT JEE</p>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <b>NEET</b>
            <div className="card-body">
              <p className="card-text">NEET</p>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <b>ICSE</b>
            <div className="card-body">
              <p className="card-text">ICSE</p>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <b>Govt. Exam</b>
            <div className="card-body">
              <p className="card-text">GOVT.</p>
            </div>
          </div>
          <div
            className="card"
            style={{
              width: "10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "8px",
            }}
          >
            <b>Engg.</b>
            <div className="card-body">
              <p className="card-text">GOVT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
