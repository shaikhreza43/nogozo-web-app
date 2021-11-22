import React from "react";
import Slider from "react-slick";

export default function HomeCarousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    lazyload: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const imageLists = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1577985051167-0d49eec21977?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80",
    },
    {
      imgUrl:"https://images.unsplash.com/photo-1561657819-51c0511e35ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1514593214839-ce1849100055?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <Slider {...settings} autoplay="2000">
              {imageLists.map((image, index) => (
                <div key={index} className="carousel-image">
                  <img src={image.imgUrl} alt={`${index}`}></img>
                </div>
              ))}
            </Slider>
        </div>
      </div>
    </div>
  );
}
