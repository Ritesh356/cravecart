import React from "react";
import Slider from "react-slick";
import slider1 from "../images/slider1.png"
import slider2 from "../images/slider2.png"
import grocery  from "../images/grocery.png"
import pizza   from "../images/pizza.png"
import pizza2   from "../images/pizza2.png"






const Homebanner=()=>{
    var settings = {
    dots:false,
    infinite:true,
    speed: 500,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,      
    autoplaySpeed: 2000,

  }
return(
    <div className="HomebannerSection">
     <Slider {...settings}>
     <div className="item">
    <img src={slider2} className="w-100"/>
    </div>
     <div className="item">
    <img src={pizza} className="w-100"/>
    </div>
     <div className="item">
    <img src={slider1} className="w-100"/>
    </div>
     <div className="item">
    <img src={pizza2} className="w-100"/>
    </div>
    <div className="item">
    <img src={grocery} className="w-100"/>
    </div>
    </Slider>
    </div>
)
}

export default Homebanner;