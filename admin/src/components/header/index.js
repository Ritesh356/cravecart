import Logo from "../images/Logowbg2.png";
import { MdOutlineMenu } from "react-icons/md";
import Searchbar from "../searchbar";
import { MdLightMode } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import Login from "./login";
import { useContext } from "react";
import { Mycontext } from "../../App";
import { MdMenuOpen } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";

const Header = () => {
    const context =useContext(Mycontext)
    return (
        <>
            <header>
                <div className="row">
                    <div className="col-2 logomain d-flex align-items-center p-0">
                        <img src={Logo} className="w-50 h-90" />
                        <div className="title pe-2"><b>CraveCart</b></div>
                    </div>
                    <div className="col-4 d-flex align-items-center ps-5 gap-4">
                        <button className="menu" onClick={()=>context.settoggleOpen(!context.toggleOpen)}>
                            {
                                context.toggleOpen===true?<MdOutlineMenu/>:<MdMenuOpen/>
                            }
                            
                        </button>
                        <Searchbar />
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center gap-4 pe-5">
                        <button className="menu1" onClick={()=>context.setlightMode(!context.lightMode)}>
                            {
                                context.lightMode===true?<MdLightMode />:<IoMdMoon/>
                            }
                            
                        </button>
                        <button className="menu1">
                            <FaCartArrowDown />
                        </button>
                        <button className="menu1">
                            <IoMail />
                        </button>
                        <button className="menu1">
                            <FaBell />
                        </button>
                        {
                            context.isLogin===false?<Link to="/signin"><button className="btn btn-primary signbtns shadow ">Sign In</button></Link>:<Login/>
                        }
                        
                       

                    </div>
                </div>

            </header>
        </>
    )
}

export default Header;