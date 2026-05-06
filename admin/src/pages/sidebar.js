import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { FaUnlock } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { Mycontext } from "../App";
import { MdRemoveRedEye } from "react-icons/md";
import { MdCloudUpload } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { PiListBulletsFill } from "react-icons/pi";


const Sidebar = () => {
    const context=useContext(Mycontext);
    const history=useNavigate();
    const [menuOpen, setmenuOpen] = useState(false);
    const [sideMenu, setsideMenu] = useState(null);
    const setsubmenu = (id) => {
       if (sideMenu === id) {
    setmenuOpen(!menuOpen);
  } else {
    setsideMenu(id);
    setmenuOpen(true);
    }}
    const logout=()=>{
        localStorage.clear();
        history("/signin");
        context.setProgress(100);


    }
    return (
        <>
            <div className='sidebar'>
                <h5 className="mainpage ps-2">Main Page</h5>
                <ul className="w-100 ps-1">
                    <li >
                      <Link to="/" className="text-style-none">  <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 0 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(0)} >
                            <span className="icon"><MdDashboard /></span>
                            Dashboard
                            <span className={`icon ${sideMenu === 0 && menuOpen === true ? 'able' : 'disable'}`}><FiPlus /></span>
                        </button>
                        </Link>
                    </li>
                    <li>
                        <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 1 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(1)}>
                            <span className="icon"><FaUnlock /></span>
                            Authentication
                            <span className={`icon ${sideMenu === 1 && menuOpen === true ? 'able' : 'disable'}`}><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 1 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/signup"> <button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign Up

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/signin"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign In

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        signout

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 2 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(2)}>
                            <span className="icon"><MdCategory /></span>
                            Category
                            <span className={`icon ${sideMenu === 2 && menuOpen === true ? 'able' : 'disable'}`}><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 2 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/category/upload"> <button className="w-100 d-flex gap-3 ps-2 pe-2 align-items-center">

                                      <span className="icon"><MdCloudUpload/></span>  Add Category

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/category/list"> <button className="w-100 d-flex gap-3 ps-2 pe-2 align-items-center">

                                      <span className="icon"><PiListBulletsFill/></span>Category List

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 3 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(3)}>
                            <span className="icon"><BiSolidMessageDetail /></span>
                            Messages
                             <span className={`icon ${sideMenu === 3 && menuOpen === true ? 'able' : 'disable'}`}><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 3 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/"> <button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign Up

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign In

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        signout

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 4 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(4)}>
                            <span className="icon"><FaProductHunt /></span>
                            product
                             <span className={`icon ${sideMenu === 4 && menuOpen === true ? 'able' : 'disable'}`}><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 4 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/product"> <button className="w-100 d-flex gap-3 ps-2 pe-2 align-items-center">

                                      <span className="icon"><MdRemoveRedEye/></span>  Product View

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/productupload"><button className="w-100 d-flex gap-3 ps-2 pe-2 align-items-center">

                                     <span className="icon"><MdCloudUpload/></span>   Product Upload

                                    </button></Link>
                                </li>
                                
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 5 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(5)}>
                            <span className="icon"><FaCartPlus /></span>
                            Orders
                             <span className={`icon ${sideMenu === 5 && menuOpen === true ? 'able' : 'disable'}`}><FaAngleRight /></span>
                        </button>
                    </li>
                    <li>
                        <button className={`w-100 d-flex justify-content-between ps-2 pe-2 align-items-center btnbar ${sideMenu === 6 && menuOpen === true ? 'able' : 'disable'}`} onClick={() => setsubmenu(6)}>
                            <span className="icon"> {context.lightMode===true?<MdLightMode />:<IoMdMoon/>}</span>
                            Theme
                            <span className={`icon ${sideMenu === 6 && menuOpen === true ? 'able' : 'disable'}`}><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 6 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/"> <button className="w-100 d-flex gap-3 ps-4 pe-2 align-items-center" onClick={()=>{
                                        context.setlightMode(true);
                                    }}>

                                      <span><MdLightMode/></span>  Light Mode

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex gap-3  ps-4 pe-2 align-items-center" onClick={()=>{
                                    context.setlightMode(false)   
                                    }}>

                                      <span><IoMdMoon/></span>  Dark Mode

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className="w-100 d-flex justify-content-between  ps-2 pe-2 align-items-center">
                            <span className="icon"><IoNotifications /></span>
                            Notification
                            <span className="icon"><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 1 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/"> <button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign Up

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign In

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        signout

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className="w-100 d-flex justify-content-between  ps-2 pe-2 align-items-center">
                            <span className="icon"><IoMdSettings /></span>
                            Settings
                            <span className="icon"><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 1 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/"> <button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign Up

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign In

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        signout

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                    <li>
                        <button className="w-100 d-flex justify-content-between  ps-2 pe-2 align-items-center">
                            <span className="icon"><MdDashboard /></span>
                            Dashboard
                            <span className="icon"><FaAngleRight /></span>
                        </button>
                        <div className={`submenu ${sideMenu === 1 && menuOpen === true ? 'able' : 'disable'}`}>
                            <ul className="ms-3 ps-2">
                                <li>
                                    <Link to="/"> <button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign Up

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        Sign In

                                    </button></Link>
                                </li>
                                <li>
                                    <Link to="/"><button className="w-100 d-flex justify-content-between ps-2 pe-2 align-items-center">

                                        signout

                                    </button></Link>
                                </li>
                            </ul>

                        </div>
                    </li>
                </ul>
                <div className="logout w-100 h-25 d-flex justify-content-center align-items-center">
                    <FaUserLarge/>
                    <button className="btn btn-primary" onClick={logout}>Log Out</button>

                </div>
            </div>

        </>
    )
}

export default Sidebar;