import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { IoMenu } from "react-icons/io5"
import { HiViewGrid } from "react-icons/hi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { BiSolidGrid } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa6";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Newprolist from "./newprolist";
import Pagination from '@mui/material/Pagination';

const Listing = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [currentNum, setcurrentNum] = useState("three")
    function setnum(args) {
        setcurrentNum(args);
    }
    return (

        <>
            <div className="listingpage d-flex ">
                <div className="leftsection">
                    <Sidebar />
                </div>
                <div className="rightsection">
                    <div className="mainpic ps-4 mt-2">
                        <div className="dislimit d-flex gap-1"><span>Only this week,</span><span>don't miss</span></div>
                        <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-6.jpg" className="w-100" />
                        <div className="grocerystore">A different kind of <br /> grocery store</div>
                        <button className="grosliderbtn btn btn-primary">Shop Now</button>
                    </div>
                    <div className="listSet mt-1 pt-2 pb-2 ms-4 ps-2 d-flex align-items-center">
                        <div className="btnwraper d-flex align-items-center gap-2 pt-2 pb-2">
                            <button className={`${currentNum === "one" ? "act" : ""}`}><IoMenu onClick={() => setnum("one")} /></button>
                            <button className={`${currentNum === "two" ? "act" : ""}`}><HiViewGrid onClick={() => setnum("two")} /></button>
                            <button className={`${currentNum === "three" ? "act" : ""}`}><BiSolidGrid onClick={() => setnum("three")} /></button>
                            <button className={`${currentNum === "four" ? "act" : ""}`}><TfiLayoutGrid4Alt onClick={() => setnum("four")} /></button>

                        </div>
                        <div className="menupop d-flex gap-2 ms-auto me-3 me-5">
                            <button className="d-flex gap-2 ps-2 pe-2 align-items-center" id="demo-positioned-button"
                                aria-controls={open ? 'demo-positioned-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}><span>Show</span>
                                <span>1</span>
                                <span><FaAngleDown /></span></button>
                            <Menu
                                id="demo-positioned-menu"
                                aria-labelledby="demo-positioned-button"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <MenuItem onClick={handleClose}>4</MenuItem>
                                <MenuItem onClick={handleClose}>8</MenuItem>
                                <MenuItem onClick={handleClose}>12</MenuItem>
                                <MenuItem onClick={handleClose}>16</MenuItem>
                                <MenuItem onClick={handleClose}>20</MenuItem>
                            </Menu>

                        </div>

                    </div>
                    <div className="productslist mt-3 ms-4 ps-3">
                        <Newprolist viewitem={currentNum} />
                    </div>
                    <div className="pagination mt-5 pt-5 mb-4 d-flex justify-content-center">
                    <Pagination count={5} color="primary" size="large"/>
                </div>
                </div>
                
            </div>

        </>

    )
}

export default Listing;