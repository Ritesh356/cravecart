import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

const Thumbslider = ({image1,image2,image3}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <div className='big'><InnerImageZoom 
                        zoomType="hover" zoomScale={2}
                        src={image1} /></div>


                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={image1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3}/>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Thumbslider;