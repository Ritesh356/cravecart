import React, { useRef } from "react";
import Slider from "react-slick";

const Sliderpage = () => {
    const sliderbig=useRef();
    const slidersml=useRef(); 


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    var settingsml = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
    };

    const goToslide=(index)=>{
        sliderbig.current.slickGoTo(index);
    }
    return (
        <><div className="sliderdiv w-100 ps-4 pe-5 ">
            <Slider {...settings}  ref={sliderbig} className="mb-3">
                <div className="items">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg" className="w-100" />

                </div>
                <div className="items">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-45.jpg" className="w-100" />

                </div>
                <div className="items ">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-33.jpg" className="w-100" />

                </div>
                <div className="items ">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg" className="w-100" />

                </div>


            </Slider>
            <div className="smlsilder w-100">
                <Slider {...settingsml} ref={slidersml} >
                    <div className="itemsml " onClick={()=>goToslide(1)}>
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg" className="w-100" />

                    </div>
                    <div className="itemsml " onClick={()=>goToslide(2)}>
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-45.jpg" className="w-100" />

                    </div>
                    <div className="itemsml " onClick={()=>goToslide(3)}>
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-33.jpg" className="w-100" />

                    </div>
                    <div className="itemsml " onClick={()=>goToslide(4)}>
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59.jpg" className="w-100" />

                    </div>

                </Slider>
            </div>
        </div>

        </>
    )
}
export default Sliderpage;