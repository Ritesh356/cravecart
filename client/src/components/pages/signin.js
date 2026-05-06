import { useContext, useEffect } from "react"
import { MyContext } from "../../App";
import bckgrnd from "../images/bckgrnd.png"
import Logo from "../images/Logo.png";
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import google from "../images/google.png";



const SignIn = () => {
    const context = useContext(MyContext);
    useEffect(() => {
        context.setisheaderfooter(false);
    }, []);

    return (
        <>
            <section className="signinpage" style={{ backgroundImage: `url(${bckgrnd})` }}>
                <div className="logoimgs">
                    <img src={Logo} />
                </div>
                <div className="signinbox shadow">
                    <div className="d-flex justify-content-center">
                        <h1 className="mb-3"><b>Sign In</b></h1>
                        <hr />
                    </div>

                    <div className="username p-3 ms-1 me-3">
                        <TextField id="standard-basic" label="Email" required variant="standard" className="w-100 mb-2" />
                        <TextField id="standard-basic" label="Password" type="password" variant="standard" className="w-100" />
                        <div className="eyebtn ">
                            <IoMdEye />
                        </div>
                    </div>
                    <div className="forget ps-4 ms-1">
                        <a href="#">Forgot Password ?</a>
                    </div>
                    <button className="signinbtn btn btn-primary w-100 mt-3">Sign In</button>
                    <p className="ps-3 mt-2 text-medium ">Not Registered? <Link to="/signup">Sign Up</Link></p>
                    <h4 className="text-center mt-4"><b>Sign In with google</b></h4>
                    <div className="loginwgoogle shadow mt-3 ps-3 d-flex align-items-center">
                        <span className="google"><img src={google} /></span>
                        <span><h4><b>Sign in with Google</b></h4></span>
                    </div>

                </div>

            </section>
        </>
    )
}

export default SignIn;
