import Rating from '@mui/material/Rating';
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import  Productdisplay from "./productdisplay.js"
import { useState } from 'react';



const Newprolist = (props) => {
    const [isCurrentId,setisCurrentId]=useState(null)

    const modalopendetails=(id)=>{
        setisCurrentId(id);
    }

    const closeDisplayModal=()=>{
        setisCurrentId(null);
    }

    return (
        <>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                </div>
                <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1" onClick={()=>{modalopendetails(1)}}><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">all natural italian style chicken-meatballs</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={3.5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$12.5</span>
                    <span className="newprice">$10.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img ">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1" onClick={()=>{modalopendetails(2)}}><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">foster-farms-takeout-crispy-classic-buffalo-wings</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={4.5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$11.5</span>
                    <span className="newprice">$10.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">chobani complete vanilla greek yogurt</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$14.5</span>
                    <span className="newprice">$11.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-57-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">fresh organic broccoli crowns</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={4} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$15.5</span>
                    <span className="newprice">$13.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-56-768x691.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">fresh brown indian coconut</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={4.2} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$16.5</span>
                    <span className="newprice">$13.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-61-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">american cheese singles</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$12.5</span>
                    <span className="newprice">$8.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-55-768x691.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">butter french croissants</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={2.9} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$18.5</span>
                    <span className="newprice">$15.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-54-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">canada dry ginger ale -2l bottle</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={2.5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$13.5</span>
                    <span className="newprice">$10.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-53-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">fresh produce melons each</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={3} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$16.5</span>
                    <span className="newprice">$9.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-52-768x691.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">fresh cavendish bananas</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={3} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$17.5</span>
                    <span className="newprice">$16.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-51-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">challenge spreadable butter</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={4.5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$20.5</span>
                    <span className="newprice">$10.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-49-768x691.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">coca-cola-2 l bottle</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={3} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$11.5</span>
                    <span className="newprice">$9.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-48-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">encore seafoods stuffed alaskan salmon</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={4} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$17.5</span>
                    <span className="newprice">$15.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-47-768x691.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">fairlife lactose free 2% milk</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={3.5} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$16.5</span>
                    <span className="newprice">$13.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
            <div className={`item2 ${props.viewitem}`}>
                <div className="item2img">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-44-346x310.jpg" className="w-100" />
                </div>
                 <div className="fullbtn d-flex flex-column">
                    <span className="fullbtn1"><AiOutlineFullscreen/></span>
                    <span className="fullbtn2"><FiHeart/></span>
                </div>
                <div className="protitle">fresh organic kiwi</div>
                <div className="stock ">In stock</div>
                <div className="rating ps-1 "><Rating name="read-only" value={4} precision={0.5} readOnly /></div>
                <div className="price d-flex gap-2 ps-3 pb-1">
                    <span className="oldprice">$15.5</span>
                    <span className="newprice">$11.0</span>
                </div>
                <div className="addtocart w-100">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>

            {
              <Productdisplay currentId={isCurrentId} closeDisplayModal={closeDisplayModal}/>
            }


        </>
    )
}
export default Newprolist;