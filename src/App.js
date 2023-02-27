import React, { Component } from "react";
import Slider from "react-slick";

export default class extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div className="card">

          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/7213821/pexels-photo-7213821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            <h1>NYC at night </h1>

          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/3811053/pexels-photo-3811053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            <h1>NYC at night</h1>

          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/6336334/pexels-photo-6336334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
            <h1>NYC at night</h1>

          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/3859985/pexels-photo-3859985.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <h1>NYC at morning</h1>

          </div>
          <div className="card">
            <img src="https://images.pexels.com/photos/162024/park-new-york-city-nyc-manhattan-162024.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
            <h1>NYC at morning</h1>
          </div>
        </Slider>
      </div>
    );
  }
}