import Dashboard from "./dashboard";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { IoBagAdd } from "react-icons/io5";
import { GiStarsStack } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiChartLineUp } from "react-icons/pi";
import Charts from "./chart";
import Menu from "./menu";
import { FaStar } from "react-icons/fa";
import Ratings from "./rating";
import Tooltip from '@mui/material/Tooltip';
import { MdDelete } from "react-icons/md"
import { MdRemoveRedEye } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import { useContext, useEffect, useState } from "react";
import { DeleteCat, Fetchdata } from "../utils/api";
import { Mycontext } from "../App";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
    const [prolist, setprolist] = useState([]);
    const context = useContext(Mycontext);
    useEffect(() => {
        window.scrollTo(0, 0);
        context.setProgress(20);
        const token = localStorage.getItem('token');

        Fetchdata('/api/product', token).then((res) => {
            context.setProgress(60)
            setprolist(res);
            context.setProgress(100)


        })
    }, []);

    const deleteProduct = (id) => {
        context.setProgress(20)
        DeleteCat(`/api/product/${id}`).then((res) => {
            Fetchdata('/api/product').then((res) => {
                context.setProgress(60)
                setprolist(res);
                context.setProgress(100)

            })

        })
    }

    const pagechange = (e, value) => {
        Fetchdata(`/api/product?page=${value}`).then((res) => {
            setprolist(res);
            console.log(res)
        })
    }
    return (
        <>
            <div className="row mt-4 me-3 w-100 ps-1">
                <div className="col-sm-8 box1 d-flex gap-4">
                    <Dashboard color={["#1ba054", "#4eda89"]} head={"total users"} num={1472} img={<FaUserCircle />} lastmon={157} grow={true} />
                    <Dashboard color={["#bf0fe1", "#ed68ff"]} head={"total orders"} num={872} img={<FaCartArrowDown />} lastmon={99} />
                    <Dashboard color={["#2b77e5", "#64b3f6"]} head={"total products"} num={195} img={<IoBagAdd />} lastmon={45} />
                    <Dashboard color={["#e1940e", "#f4d02b"]} head={"total reviews"} num={471} img={<GiStarsStack />} lastmon={91} grow={true} />
                </div>
                <div className="col-sm-4 box2">
                    <div className="barchart"><Charts /></div>
                    <span className="dbhead1">total sales</span>
                    <span className="dbnum1 d-flex gap-2">
                        <span>$25678892.21</span>
                        <span className="prolos d-flex align-items-center gap-1">
                            <span>40.3%</span>
                            <span className="d-flex align-items-center justify-content-center"><PiChartLineUp /></span>
                        </span>
                    </span>
                    <span className="lastmonthincome">$452365.2 in last month</span>
                    <span className="threedot1"><BsThreeDotsVertical /></span>
                </div>
            </div>
            <div className="card shadow mt-4 p-3 mb-5  me-1">
                <h3 className="bestsell"><b>Best Selling Products</b></h3>
                <div className="row filter mt-3 ps-2">
                    <div className="col-sm-3 d-flex flex-column">
                        <h6 className="ps-3 clr"><b>SHOW BY</b></h6>
                        <Menu valued={["6 Rows", "12 Rows", "18 Rows", "24 Rows"]} head={"Rows"} size={150} />
                    </div>
                    <div className="col-sm-3 d-flex flex-column">
                        <h6 className="ps-3 clr"><b>CATEGORY BY</b></h6>
                        <Menu valued={["Veg", "Non-Veg", "Chinese", "Indian", "grocery", "frozen"]} head={"Category"} size={150} />
                    </div>
                    <div className="col-sm-3 d-flex flex-column">
                        <h6 className="ps-3 clr"><b>BRAND BY</b></h6>
                        <Menu valued={["McDonald's", "KFC", "Domino's Pizza", "Subway", "Pizza Hut", "Burger King",]} head={"Brand"} size={150} />
                    </div>
                    <div className="col-sm-3 d-flex flex-column">
                        <h6 className="ps-3 clr"><b>SEARCH BY</b></h6>
                        <Menu valued={["Id", "Name", "Price", "Brand"]} head={"Search By"} />
                    </div>
                </div>
                <div className="table-responsive mt-4 ">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th width="7%">
                                    UID
                                </th>
                                <th width="24%">
                                    PRODUCT
                                </th>
                                <th width="9%">
                                    CATEGORY
                                </th>
                                <th width="9%">
                                    BRAND
                                </th>
                                <th width="9%">
                                    PRICE
                                </th>
                                <th width="9%">
                                    STOCK
                                </th>
                                <th width="9%">
                                    RATING
                                </th>
                                <th width="9%">
                                    isFeatured
                                </th>
                                <th width="15%">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                prolist?.productlistm?.length == 0 && <div className="catlistdiv w-100 m-5">
                                    <div className="listempty"><b>Product List is empty.</b></div>
                                    <Link to="/productupload">
                                        <button className="w-100 d-flex gap-3 ps-2 pe-2 align-items-center">

                                            <span className="icon"><MdCloudUpload /></span> <span>Add Products</span>

                                        </button>
                                    </Link>
                                </div>
                            }
                            {prolist?.productlistm?.length !== 0 && prolist?.productlistm?.map((item, index) => {
                                return (<tr>
                                    <td width="7%">
                                        <div className="d-flex justify-content-center ">
                                            <b>#{index + 1}</b>
                                        </div>
                                    </td>
                                    <td width="24%">
                                        <div className="prodmenu w-1oo d-flex align-itmes-center gap-3">
                                            <span className="prodmenupic">
                                                <img src={`${context.baseUrl}/uploads/${item.images[0]}`} className="w-100 h-100" />
                                            </span>
                                            <div className="prodinfo d-flex flex-column">
                                                <span className="prodmenuhead">{item.name}</span>
                                                <span className="prodmenupara">{item.description}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td width="9%">
                                        <div className="d-flex justify-content-center text-success">
                                            {<b> {item.category.name}</b>}
                                        </div>
                                    </td>
                                    <td width="9%">
                                        <div className="brand1 ps-2">
                                            <b>{item.brand}</b>
                                        </div>
                                    </td>
                                    <td width="9%">
                                        <div className="w-100 d-flex flex-column align-items-center">
                                            <del>${item.oldprice}</del>
                                            <span className="text-danger"><b>${item.price}</b></span>
                                        </div>
                                    </td>
                                    <td width="9%">
                                        <div className="d-flex justify-content-center ">
                                            <b>{item.countInStock}</b>
                                        </div>
                                    </td>
                                    <td width="9%">
                                        <div className="ratingstar d-flex align-items-center gap-1">
                                            <Ratings velue={item.rating} />
                                        </div>
                                    </td>
                                    <td width="9%">
                                        <div className="d-flex justify-content-center text-success">
                                            <b>{item.isFeatured == true ? "In Stock" : "Out of Stock"}</b>
                                        </div>
                                    </td>
                                    <td width="15%">
                                        <div className="actionbtn d-flex gap-3 ps-3">
                                            <Tooltip title="View"><span className="actionbtn1"><MdRemoveRedEye /></span></Tooltip>
                                            <Tooltip title="Edit"><span className="actionbtn2"><Link to={`/product/edit/${item._id}`} className="editbtnn"><RiPencilFill /></Link></span></Tooltip>
                                            <Tooltip title="Delete" onClick={() => deleteProduct(item._id)}><span className="actionbtn3"><MdDelete /></span></Tooltip>
                                        </div>
                                    </td>
                                </tr>)
                            })
                            }

                        </tbody>
                    </table>
                    <div className="mt-4 d-flex justify-content-end pe-5">
                        <Pagination count={prolist?.totalpages} color="primary" size="large" onChange={pagechange} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;