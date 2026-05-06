import Homebanner from "./Homebanner";
import { FaArrowRightLong } from "react-icons/fa6";
import ItemSlider from "./itemslider";
import Menuslider from "./menuslider.js";
import Rating from '@mui/material/Rating';
import Newprolist from "./newprolist.js";



const Home = () => {
    return (
        <>
            <div className="container1">
                <div className="row mt-1 me-1 ms-1">
                    <div className="col-md-2">
                        <div className="shadow">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" alt="load...." className="w-100" />
                        </div>
                        <div className="shadow mt-2">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="w-100" />
                        </div>
                        <div className="shadow mt-2">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" className="w-100" />
                        </div>

                    </div>
                    <div className="col-md-10">
                        <div >
                            <Homebanner />
                        </div>
                        <div className="itemsection mt-2 pt-4 pe-5 mb-3 ps-1">
                            <div className="d-flex justify-content-between ps-3">
                                <span>
                                    BEST SELLERS
                                </span>
                                <button className="btn btn-light d-flex gap-2">
                                    <span>View all</span>
                                    <span><FaArrowRightLong /></span>
                                </button>
                            </div>
                            <div className="row mt-5">
                                <div className="itemslide col-sm-12 ms-3 ">
                                    <ItemSlider />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="pic1 col-sm-6">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-11.jpg" className="w-100" />
                        <button className="pic1btn btn btn-primary">Shop Now</button>
                        <div className="pic1info">
                            <div>Cookies & Nuts</div>
                            <p> CraveCart Discount 10%</p>
                        </div>
                    </div>
                    <div className="pic1 col-sm-6">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-08.jpg" className="w-100" />
                         <button className="pic1btn btn btn-danger">Shop Now</button>
                          <div className="pic2info">
                            <div>Imported </div><div className="cherry">Cherry</div>
                        
                        </div>
                    </div>

                </div>
            </div>
            <div className="container2">
                <div className="row mt-5">
                    <div className="menupic mt-3 ps-3">What's on your mind ?</div>
                    <div className="menuslider mb-3">
                        <Menuslider />
                    </div>
                </div>

            </div>
            <div className="container3">
                <div className="row mt-5">
                    <div classname="col-sm-12">
                        <div className="newpro mb-3">
                            <span>New Products</span>
                            <p>Elevate Your Everyday with Our Newest Launch</p>
                        </div>
                        <div className="newprolist">
                            <Newprolist />
                        </div>
                    </div>

                </div>
            </div>
            <div className="container4">
                <div className="row mt-5">
                    <div className="shopifydiv col-sm-4">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-05.jpg" className="w-100" />
                        <div className="discount">WEEKEND DISCOUNT 10%</div>
                        <div className="head">Fresh Eggs</div>
                        <button className="shopify btn btn-danger">shop now</button>
                    </div>
                    <div className="shopifydiv col-sm-4">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-06.jpg" className="w-100" />
                        <div className="discount">WEEKEND DISCOUNT 25%</div>
                        <div className="head">Taste The Best</div>
                        <button className="shopify btn btn-danger">shop now</button>
                    </div>
                    <div className="shopifydiv col-sm-4">
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-10.jpg" className="w-100" />
                        <div className="discount">WEEKEND DISCOUNT 30%</div>
                        <div className="head">Yummy ! Breads</div>
                        <button className="shopify btn btn-danger">shop now</button>
                    </div>
                </div>
            </div>
            <div className="container5">
                <div className="row mt-2">
                    <div className="bottominfo col-sm-6 ">
                     <h5>$20 discount for your first order</h5>
                     <h1>Join our newsletter and get...</h1>
                     <p>Join our email subscription now to get updates on promotions and coupons.</p>
                     <div className="bottommail">
                        <input type="search" placeholder=" yourmail@email.com..."></input>
                        <button>Suscribe</button>
                     </div>
                    </div>
                     <div className="col-sm-6">
                       <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" className="w-100"/> 
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;