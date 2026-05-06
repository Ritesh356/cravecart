import { TbTruckDelivery } from "react-icons/tb";
import { TbMilk } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";
import { RiDiscountPercentLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { LuPhoneCall } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="container6">
                <div className="row  pt-5 ms-3 me-3 pb-4">
                    <div className="footertag col-sm-3 ">
                        <div className="d-flex gap-2 justify-content-center">
                            <span>
                                <TbMilk />
                            </span>
                            <div>
                                Everyday fresh products
                            </div>
                        </div>

                    </div>
                    <div className=" footertag col-sm-3">
                        <div className="d-flex gap-2 justify-content-center">
                            <span>
                                <TbTruckDelivery />
                            </span>
                            <div>
                                Free delivery for order over $70
                            </div>
                        </div>

                    </div>
                    <div className=" footertag col-sm-3">
                        <div className="d-flex gap-2 justify-content-center">
                            <span>
                                <RiDiscountPercentLine />
                            </span>
                            <div>
                                Daily Mega Discounts
                            </div>
                        </div>

                    </div>
                    <div className=" footertag col-sm-3">
                        <div className="d-flex gap-2 justify-content-center">
                            <span>
                                <LuCircleDollarSign />
                            </span>
                            <div>
                                Best price on the market
                            </div>
                        </div>

                    </div>


                </div>
                <div className="row mt-4 ms-5 me-5 ps-3 pt-4 gap-5">
                    <div className="col-sm-2 d-flex flex-column justify-content-center">
                        <h4>Fruit & Vegetables</h4>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 d-flex flex-column justify-content-center">
                        <h4>Breakfast & Dairy</h4>
                        <ul>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Cheese</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm-2 d-flex flex-column justify-content-center ">
                        <h4>Meat & Seafood</h4>
                        <ul>
                            <li><Link to="#">Breakfast Sausage</Link></li>
                            <li><Link to="#">Dinner Sausage</Link></li>
                            <li><Link to="#">Sliced Deli Meat</Link></li>
                            <li><Link to="#">Shrimp</Link></li>
                            <li><Link to="#">Wild Caught Fillets</Link></li>
                            <li><Link to="#">Crab and Shellfish</Link></li>
                            <li><Link to="#">Farm Raised Fillets</Link></li>
                        </ul>
                    </div>

                    <div className="col-sm-2 d-flex flex-column justify-content-center">
                        <h4>Beverages</h4>
                        <ul>
                            <li><Link to="#">Water</Link></li>
                            <li><Link to="#">Sparkling Water</Link></li>
                            <li><Link to="#">Soda & Pop</Link></li>
                            <li><Link to="#">Coffee</Link></li>
                            <li><Link to="#">Milk & Plant-Based Milk</Link></li>
                            <li><Link to="#">Craft Beer</Link></li>
                            <li><Link to="#">Wine</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-2 d-flex flex-column justify-content-center">
                        <h4>Breads & Bakery</h4>
                        <ul>
                            <li><Link to="#">Milk & Flavoured Milk</Link></li>
                            <li><Link to="#">Butter and Margarine</Link></li>
                            <li><Link to="#">Eggs Substitutes</Link></li>
                            <li><Link to="#">Honey</Link></li>
                            <li><Link to="#">Marmalades</Link></li>
                            <li><Link to="#">Sour Cream and Dips</Link></li>
                            <li><Link to="#">Yogurt</Link></li>
                        </ul>
                    </div>





                </div>
            </div>
            <div className="container7">
                <div className="row mt-5 ms-5 ps-5">
                    <div className="col-sm-3">
                        <div className="contactbtm d-flex gap-3">
                            <span className="spam"><LuPhoneCall /></span>
                            <div className="infobtm d-flex flex-column">
                                <span>95186-45659</span>
                                <p>working 8:00-16:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 d-flex gap-4 justify-content-end">
                        <div className="playstore d-flex flex-column">
                             <h4>Download App on Mobile :</h4>
                             <h6>15% discount on your first purchase</h6>
                        </div>
                         <div className="playstorepic d-flex flex-column">
                             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png" className="w-100"/>
                        </div>
                        <div className="playstorepic d-flex flex-column">
                             <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png" className="w-100"/>
                        </div>
                        <div className="d-flex gap-2">
                             <span className="spam1"><Link to="#"><FiInstagram/></Link></span>
                          <span className="spam1"><Link to="#"><FaFacebookF/></Link></span>
                           <span className="spam1"><Link to="#"><FaTwitter/></Link></span>
                        </div>
                        
                    </div>
                </div>
                <div className="copyright row mt-5 pt-3 ms-5 ps-3">
                 <p>Copyright 2025 ©   CraveCart private  limited.  All rights reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer;