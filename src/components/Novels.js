import React from "react";
import Slider from "react-slick";

export default function Novels(props) {
  const settings = {
    dots: false,
    infinite: true,
    lazyload: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <div>
      <h4>Novels for you</h4>
      <div className="col-lg-12">
      <Slider {...settings} autoplay="5000" className="novel-slider">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1475204257634-df83964505c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=592&q=80" className="card-img-top" alt="card" />
          <div className="card-body">
            <p className="card-text">
            Romance Novels
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" className="card-img-top" alt="card" />
          <div className="card-body">
            <p className="card-text">
            Fantasy Novels
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="card" />
          <div className="card-body">
            <p className="card-text">
            SciFi Novels
            </p>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80" className="card-img-top" alt="card" />
          <div className="card-body">
            <p className="card-text">
             Thriller Suspense Novels
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1468273519810-d3fe4c125cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="card-img-top" alt="card" />
          <div className="card-body">
            <p className="card-text">
             Religious Novels
            </p>
          </div>
        </div>

        <div className="card">
          <img src="https://images.unsplash.com/photo-1455884981818-54cb785db6fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" className="card-img-top" alt="card" />
          <div className="card-body">
            <p className="card-text">
            Explore MoreNovels
            </p>
          </div>
        </div>
      </Slider>
        <div className="col-lg-2"></div>
      {/* <Slider {...settings} className="col-lg-5" autoplay="5000">
       
      </Slider>*/}
      </div> 
    </div>
  );
}
