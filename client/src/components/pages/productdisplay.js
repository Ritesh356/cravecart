import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import Thumbslider from './thumbslider';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

const Productdisplay = (props) => {

    const [Count, setCount] = useState(0);
    const increase = () => {
        setCount(Count + 1);
    }
    const decrease = () => {
        if (Count > 0) {
            setCount(Count - 1);
        }

    }


    return (
        <>
            <Dialog open={props.currentId === 1 ? true : false} onClose={() => props.closeDisplayModal()} className="productDisplay" >
                <div className="outerboxdispaly  ms-2 me-2">
                    <button className="btn btn-light closedisplay" onClick={() => props.closeDisplayModal()}><IoClose /></button>
                    <h3>All Natural Italian-Style Chicken Meatballs</h3>
                    <div className="popuphead d-flex align-items-center">
                        <span>Brands</span>
                        <span>Welch's</span>
                        <span>|</span>
                        <span><Rating name="read-only" value={3.5} sx={{ fontSize: 18 }} precision={0.5} readOnly /></span>
                        <span>|</span>
                        <span>Review</span>
                    </div>
                    <hr />
                    <div className='row mt-2'>
                        <div className='col-md-5'>
                            <Thumbslider image1={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"} image2={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"} image3={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"} />
                        </div>
                        <div className='col-md-7'>
                            <div className="price d-flex gap-2 ps-3 pb-1">
                                <span className="oldprice">$12.5</span>
                                <span className="newprice">$10.0</span>
                            </div>
                            <div className="stock1 mt-3 ">In stock</div>
                            <div className='description mt-4'><p>All Natural Italian-Style Chicken Meatballs are tender, flavorful meatballs crafted from lean ground chicken, blended with classic Italian ingredients like Parmesan cheese, breadcrumbs, eggs, and a medley of herbs and spices such as parsley, basil, oregano, garlic, and black pepper.</p></div>
                            <div className="d-flex gap-5 align-items-center mt-2 ">
                                <div className='itemcount mt-3 d-flex gap-2 align-items-center'>
                                    <button className='btn btn-primary' onClick={() => decrease()}><FaMinus /></button>
                                    <div className='countnum'>{Count}</div>
                                    <button className='btn btn-primary' onClick={() => increase()}><FaPlus /></button>
                                </div>
                                <button className=" addcartbtn btn btn-primary mt-3">Add to Cart</button>

                            </div>

                            <div className="d-flex gap-5 align-items-center mt-2 " >
                                <div className='wishlist mt-5 '>
                                    <button type="button" class="btn btn-outline-secondary d-flex gap-2 align-items-center"><CiHeart />ADD TO WISHLIST</button>
                                </div>
                                <div className='wishlist mt-5 '>
                                    <button type="button" class="btn btn-outline-secondary d-flex gap-2 align-items-center"><MdOutlineCompareArrows />COMPARE</button>
                                </div>
                            </div>
                            <br />
                            <hr />
                        </div>
                    </div>
                </div>
            </Dialog>
            <Dialog open={props.currentId === 2 ? true : false} onClose={() => props.closeDisplayModal()} className="productDisplay" >
                <div className="outerboxdispaly  ms-2 me-2">
                    <button className="btn btn-light closedisplay" onClick={() => props.closeDisplayModal()}><IoClose /></button>
                    <h3>foster farms takeout crispy classic buffalo wings</h3>
                    <div className="popuphead d-flex align-items-center">
                        <span>Brands</span>
                        <span>Welch's</span>
                        <span>|</span>
                        <span><Rating name="read-only" value={4.5} sx={{ fontSize: 18 }} precision={0.5} readOnly /></span>
                        <span>|</span>
                        <span>Review</span>
                    </div>
                    <hr />
                    <div className='row mt-2'>
                        <div className='col-md-5'>
                          <Thumbslider image1={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg"} image2={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-36.jpg"} image3={"https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg"} />
                        </div>
                        <div className='col-md-7'>
                            <div className="price d-flex gap-2 ps-3 pb-1">
                                <span className="oldprice">$11.5</span>
                                <span className="newprice">$10.0</span>
                            </div>
                            <div className="stock1 mt-3 ">In stock</div>
                            <div className='description mt-4'><p>Foster Farms Take Out Crispy Classic Buffalo Wings are ready-to-cook, restaurant-quality chicken wings featuring humanely raised chicken with no added hormones or steroids. The wings are made from chicken wing sections that are seasoned and par-fried to achieve a crispy exterior</p></div>
                            <div className="d-flex gap-5 align-items-center mt-2 ">
                                <div className='itemcount mt-3 d-flex gap-2 align-items-center'>
                                    <button className='btn btn-primary' onClick={() => decrease()}><FaMinus /></button>
                                    <div className='countnum'>{Count}</div>
                                    <button className='btn btn-primary' onClick={() => increase()}><FaPlus /></button>
                                </div>
                                <button className=" addcartbtn btn btn-primary mt-3">Add to Cart</button>

                            </div>

                            <div className="d-flex gap-5 align-items-center mt-2 " >
                                <div className='wishlist mt-5 '>
                                    <button type="button" class="btn btn-outline-secondary d-flex gap-2 align-items-center"><CiHeart />ADD TO WISHLIST</button>
                                </div>
                                <div className='wishlist mt-5 '>
                                    <button type="button" class="btn btn-outline-secondary d-flex gap-2 align-items-center"><MdOutlineCompareArrows />COMPARE</button>
                                </div>
                            </div>
                            <br />
                            <hr />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default Productdisplay;