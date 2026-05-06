import { CustomizedBreadcrumbs } from "../pages/breadcrumb"
import Sliderpage from "./silder";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdBrandingWatermark } from "react-icons/md";
import { FaTags } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { BiSolidDollarCircle } from "react-icons/bi";
import { GiStarsStack } from "react-icons/gi";
import { TbSquareDot } from "react-icons/tb";
import Rating from '@mui/material/Rating';
import Review from "./review";
import Woman from "../components/images/wman.png";
import Man from "../components/images/man.png"
const Product = () => {
    return (
        <>
            <div className="row shadow pt-3 pb-3  m-4  justify-content-around align-items-center bg-w">
                <div className="col-sm-8">
                    <span className="prodview">Product view</span>
                </div>
                <div className="col-sm-4">
                    <CustomizedBreadcrumbs  page2={"Product"} page1={"Product View"}/>
                </div>


            </div>
            <div className="row shadow  pt-3 pb-5  m-4  justify-content-around  bg-w ">
                <div className="col-5 ps-3 pe-5">
                    <div className=" ps-3 w-100 prodheading mb-4">
                        Product gallary
                    </div>
                    <Sliderpage />
                </div>
                <div className="col-7">
                    <div className=" ps-3 w-100 prodheading mb-3">
                        Product Details
                    </div>
                    <div className="prodtitleinfo pb-2 mb-3">
                        <h5>Chobani Complete Vanilla Greek Yogurt</h5>
                    </div>
                    <div className="table-respond w-100">
                        <div className="table2" >
                            <table style={{ width: "100%", tableLayout: "fixed" }}>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <BiSolidCategoryAlt />
                                            </span>
                                            <span>category</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%"> <div className=" vegbutn p-0 m-0  d-flex  align-items-center gap-2">
                                        <span>
                                            <TbSquareDot />
                                        </span>
                                        <span>Veg</span>
                                    </div></td>
                                </tr>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <MdBrandingWatermark />
                                            </span>
                                            <span>brand</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%">Diamond</td>
                                </tr>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <IoIosColorPalette />
                                            </span>
                                            <span>Weight</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%">500g</td>
                                </tr>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <FaTags />
                                            </span>
                                            <span>shelf-life</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%">6 Months</td>
                                </tr>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <BiSolidDollarCircle />
                                            </span>
                                            <span>price</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-1">

                                            <span><b>$45</b></span>
                                            <del className="text-danger font-size-small">$60</del>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <HiMiniCheckBadge />
                                            </span>
                                            <span>published</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%">10 July 2025</td>
                                </tr>
                                <tr>
                                    <td width="30%">
                                        <div className="p-0 m-0  d-flex  align-items-center gap-3">
                                            <span>
                                                <GiStarsStack />
                                            </span>
                                            <span>reviews</span>
                                        </div>
                                    </td>
                                    <td width="10%">: </td>
                                    <td width="60%">(9) Reviews</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row shadow  pt-3 pb-5  m-4  justify-content-start  bg-w ">
                <div className=" ps-3 w-100 prodheading mb-3">
                    Product description
                </div>
                <div className="despara ps-5 pe-5">
                    Chobani Complete Vanilla Greek Yogurt is formulated to deliver both exceptional nutrition and a satisfying eating experience. This yogurt stands out for its high protein content, providing 20–25 grams of complete protein per serving, which is essential for supporting muscle health, satiety, and overall wellness. The protein in Chobani Complete is considered "complete" because it contains all nine essential amino acids that the body cannot produce on its own.
                </div>
                <div className="hrline pt-4">
                    <hr />
                </div>
                <div className=" ps-4 w-100 prodheading mb-3">
                    Rate analytics
                </div>
                <div className="progressionbar row mt-4 justify-content-center d-flex">
                    <div className="col-sm-4">
                        <div className="d-flex align-items-center mb-3">
                            <span className="w-25  starr">5 Star (10)</span>
                            <span className="w-75"><div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "10%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div></span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <span className="w-25 starr ">4 Star (50)</span>
                            <span className="w-75"><div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "80%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div></span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <span className="w-25  starr">3 Star (35)</span>
                            <span className="w-75"><div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "35%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div></span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <span className="w-25  starr">2 Star (40)</span>
                            <span className="w-75"><div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div></span>
                        </div>
                        <div className="d-flex align-items-center mb-3">
                            <span className="w-25  starr">1 Star (15)</span>
                            <span className="w-75"><div className="progress">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "15%" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div></span>
                        </div>

                    </div>
                    <div className="col-sm-4 ps-5">
                        <div className="totalreview">Total Review (150)</div>
                        <div className="totalreview2 d-flex align-items-center ps-4">3.7</div>
                        <div className="ratings"><Rating name="read-only" value={3.7} precision={0.1} readOnly /></div>
                        <div className="avgscore">Your Average Score</div>
                    </div>
                </div>


            </div>
            <div className="row shadow  pt-3 pb-5  m-4  justify-content-start  bg-w ">
                <div className=" ps-3 w-100 prodheadings mb-4 ">
                    Customer Reviews
                </div>
                  <Review name={"Ritesh Deshwal"} min={2} num={99} img={Man}  />
                  <Review name={"Anjali"} min={25} num={45} img={Woman}/>
                  <Review name={"John"} min={40} num={12} img={Man}/>
                  <Review name={"Rajeev Singh"} min={55} num={71} img={Man}/>
            </div>
             <div className="row shadow  pt-3 pb-5  m-4  justify-content-start  bg-w ">
                <form className="reviewform w-100 d-flex justify-content-center ">
                    <textarea placeholder="Write  Your Message Here" className="w-100 textarea">

                    </textarea>

                </form>
                <button className="btn btn-primary  mt-5 ms-2 me-1 uploadme">
                    upload
                </button>
             </div>

        </>
    )
}

export default Product;