import React from "react";

export default function FeaturedNovels(props) {
  return (
    <div>
      <h4>Featured Novels For you</h4>
      <div className="col-lg-12 featured-novels-col">
        <div className="card featured-novels-card">
          <img
            src="https://images.unsplash.com/photo-1475204257634-df83964505c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=592&q=80"
            className="card-img-top"
            alt="card"
          />
          <div className="card-body">
            <p className="card-text">Romance Novels</p>
            <p className="card-text">Rs. 500/-</p>
          </div>
        </div>
        <div className="card featured-novels-card">
          <img
            src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
            className="card-img-top"
            alt="card"
          />
          <div className="card-body">
            <p className="card-text">Some Another Novels</p>
            <p className="card-text">Rs. 500/-</p>
          </div>
        </div>
        <div className="card featured-novels-card">
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="card-img-top"
            alt="card"
          />
          <div className="card-body">
            <p className="card-text">Science Novels</p>
            <p className="card-text">Rs. 500/-</p>
          </div>
        </div>
      </div>
    </div>
  );
}
