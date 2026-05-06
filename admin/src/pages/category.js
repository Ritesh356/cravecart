import { CustomizedBreadcrumbs } from "../pages/breadcrumb";
import { MdCloudUpload } from "react-icons/md";
import { useContext, useState } from "react";
import { PostData } from "../utils/api";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Mycontext } from "../App";

const Category = () => {
    const context = useContext(Mycontext);
    const [loadopen, setloadOpen] = useState(false);
    const [formfields, setFormfields] = useState({
        name: "",
        images: [],
        color: ""
    });
    const [empty, setempty] = useState(false);

    const history = useNavigate();

    const changeValue = (e) => {
        setFormfields(() =>
        ({
            ...formfields,
            [e.target.name]: e.target.value

        }))

    }
    const addimgurl = (e) => {
        const arr = [];
        arr.push(e.target.value)
        setFormfields(() =>
        ({
            ...formfields,
            [e.target.name]: arr

        }))
    }

    const addcategory = (e) => {
        e.preventDefault();

        if (formfields.name !== "" && formfields.images.length !== 0 && formfields.color !== "") {
            context.setProgress(20);
            setloadOpen(true)
             const token = localStorage.getItem('token');
            PostData('/api/category/create', formfields,token).then(
                res => {
                    setloadOpen(false);
                    context.setProgress(100);
                    history('/category/list')
                }
            )
        }
        else {
            setempty(true);
        }

    }
    const handleClose = () => {
        setempty(false);
    };
    return (
        <>
            <div className="row shadow pt-3 pb-3  m-4  justify-content-around align-items-center bg-w">
                <div className="col-sm-8">
                    <span className="prodview">Category Upload</span>
                </div>
                <div className="col-sm-4">
                    <CustomizedBreadcrumbs page2={"Category"} page1={"Add Category"} />
                </div>
            </div>
            <div className="row shadow pt-3 pb-3  m-4 justify-content-around align-items-center bg-w">
                {loadopen === true && <div>
                    <Backdrop
                        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                        open={true}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </div>}
                <Snackbar open={empty} autoHideDuration={5000} onClose={handleClose}>
                    <Alert
                        onClose={handleClose}
                        severity="error"
                        variant="filled"
                        sx={{ width: '30%' }}
                    >
                        Please fill the required details *
                    </Alert>
                </Snackbar>
                <div className="col-sm-10 ">
                    <h3 className="uploadbasic mb-5 ps-2 ">Basic Information</h3>
                    <form className="reviewform w-100 " onSubmit={addcategory}>
                        <h5 className="mb-2 uploadbasic2 ms-3"><b>Category</b></h5>
                        <input type="text" placeholder="Type here..." className="w-98 inputfield mb-4 ms-3 me-2" name="name" onChange={changeValue} />
                        <h5 className="mb-2 uploadbasic2 ms-3"><b>image URL</b></h5>
                        <input type="text" placeholder="Type here..." className="w-98 inputfield mb-4 ms-3 me-2" name="images" onChange={addimgurl} />
                        <h5 className="mb-2 uploadbasic2 ms-3"><b>Color</b></h5>
                        <input type="text" placeholder="Type here..." className="w-98 inputfield mb-4 ms-3 me-2" name="color" onChange={changeValue} />
                        <button className="btn btn-primary  mt-3 ms-2 me-1 uploadme  d-flex justify-content-center align-items-center" type="submit">
                            <span className="d-flex gap-3 align-items-center"> <span className="uploadicon"><MdCloudUpload /></span>Upload</span>
                        </button>

                    </form>


                </div>


            </div>
        </>
    )
}
export default Category;