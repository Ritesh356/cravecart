import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Quantity from "./quantity";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { createContext } from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const MyContexts = createContext();

const Cart = () => {
    const [Count, setCount] = useState(1);
    const price = 10.0;
    const [subTotal, setsubTotal] = useState(price * Count);


    useEffect(() => {
        setsubTotal(price * Count);
    }, [Count]);

    const valuess = {
        Count,
        setCount
    };


    return (
        <>
            <div className="cartheading  mt-3  ms-3">
                <h3 className="carthead mt-3 ps-1 ms-3">YOUR CART <span><MdOutlineShoppingCartCheckout/></span></h3>
                <h2 className="mt-3 ps-1 ms-3">Your cart has total <b>3 Items.</b></h2>
            </div>
            <div className="row mt-4 ms-2 me-2">
                <div className="col-sm-9">
                    <div classname="table-cart me-2">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th width="50%">product</th>
                                    <th width="15%">quantity</th>
                                    <th width="15%">price</th>
                                    <th width="10%">SUBtotal</th>
                                    <th width="10%">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="50%">
                                        <div className="cartimginfo  d-flex align-items-center">
                                            <div className="imgwrpr">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                                            </div>
                                            <div className="imginfo d-flex flex-column">
                                                <Link to="/product/1"><h4>all natural italian style chicken-meatballs</h4></Link>
                                                <div className="rating ps-1 "><Rating name="read-only" value={3.5} precision={0.5} readOnly /></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td width="15%">
                                        <MyContexts.Provider value={valuess}>
                                            <Quantity />
                                        </MyContexts.Provider>



                                    </td>
                                    <td width="15%"><span className="newprice">$10.0</span></td>
                                    <td width="10%"><span className="newsubtotal">${subTotal}</span></td>
                                    <td width="10%"><button className="cartclose"><IoCloseSharp /></button></td>
                                </tr>
                                <tr>
                                    <td width="50%">
                                        <div className="cartimginfo  d-flex align-items-center">
                                            <div className="imgwrpr">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                                            </div>
                                            <div className="imginfo d-flex flex-column">
                                                <Link to="/product/1"><h4>all natural italian style chicken-meatballs</h4></Link>
                                                <div className="rating ps-1 "><Rating name="read-only" value={3.5} precision={0.5} readOnly /></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td width="15%">
                                        <MyContexts.Provider value={valuess}>
                                            <Quantity />
                                        </MyContexts.Provider>



                                    </td>
                                    <td width="15%"><span className="newprice">$10.0</span></td>
                                    <td width="10%"><span className="newsubtotal">${subTotal}</span></td>
                                    <td width="10%"><button className="cartclose"><IoCloseSharp /></button></td>
                                </tr>
                                <tr>
                                    <td width="50%">
                                        <div className="cartimginfo  d-flex align-items-center">
                                            <div className="imgwrpr">
                                                <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg" className="w-100" />
                                            </div>
                                            <div className="imginfo d-flex flex-column">
                                                <Link to="/product/1"><h4>all natural italian style chicken-meatballs</h4></Link>
                                                <div className="rating ps-1 "><Rating name="read-only" value={3.5} precision={0.5} readOnly /></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td width="15%">
                                        <MyContexts.Provider value={valuess}>
                                            <Quantity />
                                        </MyContexts.Provider>



                                    </td>
                                    <td width="15%"><span className="newprice">$10.0</span></td>
                                    <td width="10%"><span className="newsubtotal">${subTotal}</span></td>
                                    <td width="10%"><button className="cartclose"><IoCloseSharp /></button></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="totalcart shadow p-2">
                        <div className="totalheading d-flex d-flex justify-content-center">CART  TOTAL</div>
                        <hr />
                        <div className="cartbox mt-3 ms-4 me-4">
                            <div className="subtotals d-flex justify-content-between">
                                <span>subTotal</span>
                                <span>$10.00</span>
                            </div>
                            <div className="gst d-flex justify-content-between">
                                <span>GST</span>
                                <span>18%</span>
                            </div>
                            <div className="discountcart d-flex justify-content-between">
                                <span>discount</span>
                                <span>-</span>
                            </div>
                            <div className="delivery d-flex justify-content-between">
                                <span>Delivery</span>
                                <span>FREE</span>
                            </div>
                            <div className=" nettotal d-flex justify-content-between">
                                <span>Total</span>
                                <span>$10.00</span>
                            </div>
                        </div>
                        <button className="paypro mt-3  p-1 d-flex gap-4 align-items-center justify-content-center">
                            <span>Check Out</span>
                            <span><IoBagCheckOutline /></span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cart;
export { MyContexts };