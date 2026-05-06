import { useContext, useState } from "react";
import { Mycontext } from "../App";
import { useEffect } from "react";
import Background from "../components/images/background.png"
import Logo from "../components/images/Logowbg2.png"
import { IoMail } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Google from "../components/images/googlewbg.png"
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { PostData } from "../utils/api";



const Signup = () => {
    const context = useContext(Mycontext);
    const direct = useNavigate();
    const [Formfields, setFormfields] = useState({
        username: "",
        email: "",
        phone: "",
        password: ""
    });
    useEffect(() => {
        context.setisHeadfoot(false);
        return () => {
            context.setisHeadfoot(true);
        };
    }, []);
    const changevalue = (e) => {
        setFormfields(() => ({
            ...Formfields,
            [e.target.name]: e.target.value
        }))
    }
    const uploaduser = (e) => {
        e.preventDefault();
        console.log("hello ritesh")
        try {
            PostData('/api/user/signup', Formfields).then((res) => {
                direct('/signin');
            }).catch((error) => {
                if (error.response && error.response.status === 409) {
                    // The server returned a 409 conflict
                    alert("user already exist");
                }
            }

            )
        }
        catch (error) {
            console.log(error);
        }


    }

    return (
        <>
            <div className="row ">

                <div className="col-sm-4 signupcol">
                    <span className="j">
                        <img src={Logo} className="w-50" />
                    </span>
                    <span className="sinup">Register a new account</span>
                    <div className="signupmain p-2">
                        <form onSubmit={uploaduser}>
                            <div className="emails ps-2">
                                <span className="mailspan"><FaUserCircle /></span>
                                <input type="text" placeholder="enter your name" className="emailsbox w-100" name="username" onChange={changevalue} />
                            </div>
                            <div className="emails ps-2">
                                <span className="mailspan"><IoMail /></span>
                                <input type="text" placeholder="enter your Email" className="emailsbox w-100" name="email" onChange={changevalue} />
                            </div>
                            <div className="emails ps-2">
                                <span className="mailspan"><FaPhoneAlt /></span>
                                <input type="text" placeholder="enter mobile number" className="emailsbox w-100" name="phone" onChange={changevalue} />
                            </div>
                            <div className="emails ps-2">
                                <span className="mailspan"><FaShieldAlt /></span>
                                <input type="text" placeholder="enter your password" className="emailsbox w-100" name="password" onChange={changevalue} />
                            </div>
                            <div className="emails ps-2">
                                <span className="mailspan"><IoShieldCheckmarkSharp /></span>
                                <input type="text" placeholder="confirm your password" className="emailsbox w-100" name="pasword" onChange={changevalue} />
                            </div>
                            <FormControlLabel required control={<Checkbox />} label="I agree to the All Terms & Conditions" className="m-0 p-0 checkbox" />
                            <button className="btn btn-primary w-100 mt-3" type="submit">Sign Up</button>
                            <div className="orbtn d-flex align-items-center gap-1 mt-4 mb-4">
                                <span><b>-------------------------------------------</b></span>
                                <span><b>or</b></span>
                                <span><b>------------------------------------------</b></span>

                            </div>
                        </form>
                        <button className="emailsbtn2 ps-4 gap-2 pe-4 w-100 d-flex me-2 ms-1 ">
                            <span className="facebk"><img src={Google} className="w-100" /></span>
                            <span>Continue with Google</span>
                        </button>
                        <div className="mt-5  pb-3 ps-3 pe-3 d-flex justify-content-center gap-2">
                            <span className="clr"><b>Already have an account?</b></span><span><Link to="/signin"><b>Sign In</b></Link></span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 sidecol p-0">
                    <img src={Background} className="w-100" />
                </div>
            </div>
        </>
    )
}
export default Signup;