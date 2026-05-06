import { CustomizedBreadcrumbs } from "../pages/breadcrumb";
import Ratings from "./rating";
import Tooltip from '@mui/material/Tooltip';
import { MdDelete } from "react-icons/md"
import { MdRemoveRedEye } from "react-icons/md";
import { RiPencilFill } from "react-icons/ri";
import Pagination from '@mui/material/Pagination';
import { createContext, useEffect, useState } from "react";
import { DeleteCat, Editdata, Fetchdata } from "../utils/api";
import Dialogedit from "./editdialog";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Mycontext } from "../App";

const Mycontext1 = createContext();

const Categorylist = () => {
    const context = useContext(Mycontext)
    const [Catdata, setCatdata] = useState([]);
    const [editdata, seteditdata] = useState([]);
    const [loadopen, setloadOpen] = useState(false);
    const [catid, setcatid] = useState(null);
    //   to fetch cat list
    useEffect(() => {
        context.setProgress(20);
        const token = localStorage.getItem('token');
        Fetchdata('/api/category',token).then((res) => {
            setCatdata(res);
            context.setProgress(100);
        })
    }, []);
    //to edit information


    //  to change value
    const [formfields, setFormfields] = useState({
        name: "",
        images: [],
        color: ""
    });

    const changeValue = (e) => {
        setFormfields(() =>
        ({
            ...formfields,
            [e.target.name]: e.target.value

        }))

    }
    // to change image
    const addimgurl = (e) => {
        const arr = [];
        arr.push(e.target.value)
        setFormfields(() =>
        ({
            ...formfields,
            [e.target.name]: arr

        }))
    }

    //  to fill data 
    const [open, setOpen] = useState(false);

    const handleClickOpen = (id) => {
        setOpen(true);
        setcatid(id);
        Fetchdata(`/api/category/${id}`).then((res) => {
            console.log(res);
            setFormfields(res);

        })
    };

    // final edit
    const Editfinal = (e) => {
        e.preventDefault();
        setloadOpen(true);
        context.setProgress(20);
        Editdata(`/api/category/${catid}`, formfields).then((res) => {
            context.setProgress(60);
            Fetchdata('/api/category').then((res) => {
                setCatdata(res);
                handleClose();
                setloadOpen(false);
                context.setProgress(100);
            })

        })

    }



    // to close dialog
    const handleClose = () => {
        setOpen(false);
    };

    // delete
    const DeleteCategory = (id) => {
        context.setProgress(20)
        DeleteCat(`/api/category/${id}`).then((res) => {
            Fetchdata('/api/category').then((res) => {
                setCatdata(res);
                handleClose();
                setloadOpen(false);
                context.setProgress(100)

            })
        })

    }

    const pagechange = (e, value) => {
        Fetchdata(`/api/category?page=${value}`).then((res) => {
            setCatdata(res);
            console.log(res)
        })
    }

    const valuess = { open, setOpen, handleClickOpen, handleClose, editdata, seteditdata, formfields, setFormfields, changeValue, Editfinal, addimgurl, loadopen, setloadOpen };

    return (
        <>
            <div className="row shadow pt-3 pb-3  m-4  justify-content-around align-items-center bg-w">
                <div className="col-sm-8">
                    <span className="prodview">Category  List</span>
                </div>
                <div className="col-sm-4">
                    <CustomizedBreadcrumbs page2={"Category"} page1={"Category list"} />
                </div>
            </div>
            <div className="table-responsive mt-5 ms-4 me-4 ">
                <table className="table ">
                    <thead>
                        <tr>
                            <th width="10%">
                                <div className="d-flex justify-content-center ">UID</div>
                            </th>
                            <th width="35%">
                                <div className="d-flex justify-content-center ">IMAGES</div>
                            </th>
                            <th width="18%">
                                <div className="d-flex justify-content-center ">NAME</div>
                            </th>
                            <th width="17%">
                                <div className="d-flex justify-content-center ">COLOR</div>
                            </th>
                            <th width="15%">
                                <div className="d-flex justify-content-center ">
                                    <b>ACTION</b>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Catdata.categoryListm?.length == 0 && <div className="catlistdiv w-100 m-5">
                                <div className="listempty"><b>Category List is empty.</b></div>
                                <Link to="/category/upload">
                                    <button className="w-100 d-flex gap-3 ps-2 pe-2 align-items-center">

                                        <span className="icon"><MdCloudUpload /></span> <span>Add Category</span>

                                    </button>
                                </Link>
                            </div>
                        }
                        {
                            Catdata?.categoryListm?.length !== 0 && Catdata?.categoryListm?.map((item, index) => {
                                return (
                                    <tr>
                                        <td width="10%">
                                            <div className="d-flex justify-content-center ">
                                                <b># {index + 1}</b>
                                            </div>
                                        </td>
                                        <td width="35%">
                                            <div className="d-flex justify-content-center ">
                                                <img src={item.images[0]} alt="" className="w-25" />
                                            </div>
                                        </td>
                                        <td width="18%">
                                            <div className="d-flex justify-content-center ">
                                                <b>{item.name}</b>
                                            </div>
                                        </td>
                                        <td width="17%">
                                            <div className="d-flex gap-4 ps-3 align-items-center">
                                                <span className="dot" style={{ background: item.color }}></span> <b>{item.color}</b>
                                            </div>
                                        </td>


                                        <td width="15%">
                                            <Mycontext1.Provider value={valuess}>
                                                <div className="actionbtn d-flex gap-3 ps-3">
                                                    <Tooltip title="View"><span className="actionbtn1" ><MdRemoveRedEye /></span></Tooltip>
                                                    <Tooltip title="Edit"><span className="actionbtn2" onClick={() => { handleClickOpen(item._id) }}><RiPencilFill /></span></Tooltip>
                                                    <Tooltip title="Delete"><span className="actionbtn3" onClick={() => { DeleteCategory(item._id) }}><MdDelete /></span></Tooltip>
                                                    <Dialogedit />
                                                </div>
                                            </Mycontext1.Provider>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
                <div className="mt-4 mb-3 d-flex justify-content-end pe-5">
                    <Pagination count={Catdata?.totalpages} color="primary" size="large" onChange={pagechange} />
                </div>
            </div>
        </>
    )

}

export default Categorylist;
export { Mycontext1 };