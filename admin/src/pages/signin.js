import { useContext, useEffect, useState } from "react";
import { Mycontext } from "../App";
import Background from "../components/images/background.png"
import Logo from "../components/images/Logowbg2.png"
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import Google from "../components/images/googlewbg.png"
import { Link } from "react-router-dom";
import { FaMobileScreen } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { PostData } from "../utils/api";


const Signin = () => {
    const context = useContext(Mycontext);
    const [fields, setfields] = useState({
        email: "",
        phone: "",
        password: ""
    })

    useEffect(() => {
        context.setisHeadfoot(false);
        return () => {
            context.setisHeadfoot(true);
        };
    }, []);

    const onchange = (e) => {
        setfields(() => ({
            ...fields,
            [e.target.name]: e.target.value
        }))
    }

    const signinuser = (e) => {
        e.preventDefault();
        console.log(fields)
        PostData('/api/user/signin', fields).then((res) => {
            
            localStorage.setItem("token", res.data?.token);
                const user = {
                    username: res.data.user?.username,
                    email: res.data.user?.email,
                    id: res.data.user?.id
                }
                localStorage.setItem("user", JSON.stringify(user))
                window.location.href = "/";


        })


    }
    console.log(context.user)

    return (
        <>
            <div className="signback w-100">
                <img src={Background} className=" signbackimg w-100" />
                <span className="i">
                    <img src={Logo} className="w-50" />
                </span>
                <div className="mainout d-flex flex-column">
                    <div className="mainsign shadow">
                        <div className="maininner w-100 ps-3 pe-3">
                            <h4 className="d-flex justify-content-center mt-1 mb-4 lgncrv "><b>Login to CraveCart</b></h4>
                            <form onSubmit={signinuser}>
                                <div className="emails ps-2">
                                    <span className="mailspan"><IoMail /></span>
                                    <input type="text" placeholder="@email.com" className="emailsbox w-100" name="email" onChange={onchange} />
                                </div>
                                <div className="emails ps-2">
                                    <span className="mailspan"><FaLock /></span>
                                    <input type="password" placeholder="Password" className="emailsbox w-100" name="password" onChange={onchange} />
                                </div>
                                <div className="emails ps-2">
                                    <span className="mailspan"><FaMobileScreen /></span>
                                    <input type="text" placeholder="Mobile no." className="emailsbox w-100" name="phone" onChange={onchange} />
                                </div>
                                <div className="w-100 ps-2 pe-2">
                                    <button className="btn btn-primary w-100 " type="submit">Sign In</button>
                                </div>
                                <h5 className="d-flex justify-content-center mt-2 mb-3 fpass"><b>Forgot Password</b></h5>
                            </form>
                            <div className="orbtn d-flex align-items-center gap-1 mt-1 mb-4">
                                <span><b>-------------------------------------------</b></span>
                                <span><b>or</b></span>
                                <span><b>------------------------------------------</b></span>

                            </div>
                            <button className="emailsbtn ps-4 gap-2 pe-4 w-100 d-flex me-2 ms-1 shadow">
                                <span className="facebk"><FaFacebookF /></span>
                                <span>Continue with facebook</span>
                            </button>
                            <button className="emailsbtn2 ps-4 gap-2 pe-4 w-100 d-flex me-2 ms-1 ">
                                <span className="facebk"><img src={Google} className="w-100" /></span>
                                <span>Continue with Google</span>
                            </button>

                        </div>
                    </div>
                    <div className="mainsign shadow mt-3 pt-3 pb-3 ps-3 pe-3 d-flex justify-content-center gap-2">
                        <span className="ntrgstr"><b>Don't have an account?</b></span><span><Link to="/signup">register</Link></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signin;