import { useContext, useEffect } from "react"
import { MyContext } from "../../App";
import bckgrnd from "../images/bckgrnd.png"
import Logo from "../images/Logo.png";
import TextField from '@mui/material/TextField';
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
import google from "../images/google.png";



const Signup=()=>{
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
                        <h1 className="mb-3"><b>Sign Up</b></h1>
                        <hr />
                    </div>

                    <div className="username p-3 ms-1 me-3">
                        <TextField id="standard-basic" label="Name" required variant="standard" className="w-100 mb-2" />
                        <TextField id="standard-basic" label="Email" required variant="standard" className="w-100 mb-2" />
                        <TextField id="standard-basic" label="Password" type="password" required variant="standard" className="w-100" />
                         <TextField id="standard-basic" label="confirm Password" type="password" required variant="standard" className="w-100" />
                       
                    </div>
                    
                    <button className="signinbtn btn btn-primary w-100 mt-3">Sign Up</button>
                    <div className="loginwgoogle shadow mt-3 ps-3 d-flex align-items-center">
                        <span className="google"><img src={google} /></span>
                        <span><h4><b>Sign in with Google</b></h4></span>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Signup;