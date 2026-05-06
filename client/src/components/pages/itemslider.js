import Slider from "react-slick";
import Rating from '@mui/material/Rating';


const ItemSlider = () => {
    const settingsFour = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: false,
        speed: 500,
        arrows: true,
    };
    return (
        <><div className="itemslide">
            <Slider {...settingsFour}>

                <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/ef357551-fc05-4a24-89a8-0850670bcc27_254124.JPG" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">McDonald's</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/83e8496d-d38e-4369-8723-a60499856fcb_136238.JPG" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Pizza Hut</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4.5}
                        precision={0.5} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/4d02ee64-7d6a-47d9-9531-dace3d75e3e0_298334.JPG" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Domino's</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/547cbc15-5818-49a9-b68d-77a046d8993a_511393.JPG" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Bakingo</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={3.5} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/d90bbc78-41cc-419f-986a-1a878aa9afc2_138431.jpg" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Burger King</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4.5} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/9711b61b-4b3b-4c4d-893c-dc161c95b984_364940.jpg" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Good Bowl</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bwsfenhmky8ym3unok2o" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Chicago pizza</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>
                 <div className="items1 pb-2 w-sm-190">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/972a37599772cdc7df93a0855ad87591" className="w-100" />
                    <div className="details">
                        <div className="itemtitle1 ps-1 w-100">Burger Singh</div>
                        <div className="rating ps-1 pb-3"><Rating name="read-only" sx={{
                            '& .MuiRating-iconFilled': {
                                color: '#FFD700',
                            },
                            '& .MuiRating-iconHover': {
                                color: '#FFC107',
                                fontSize: '10px',
                            },
                            '& .MuiSvgIcon-root': {
                                width: '0.5em',
                                height: '0.5em',
                            }
                        }} value={4} readOnly /></div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-danger">Order Now</button>
                        </div>

                    </div>
                </div>


            </Slider>

        </div>
        </>
    )
}

export default ItemSlider