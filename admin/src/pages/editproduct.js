

import { CustomizedBreadcrumbs } from "../pages/breadcrumb";
import { MdCloudUpload } from "react-icons/md";
import { useContext, useRef } from "react";
import { useEffect, useState } from "react";
import { Editdata, Fetchdata, PostData } from "../utils/api";
import Menu1 from "./menu1";
import { useNavigate } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { FaRegImages } from "react-icons/fa";
import { Mycontext } from "../App";
import { useParams } from "react-router-dom";


const Editpro = () => {
    const context = useContext(Mycontext);
    const history = useNavigate();
    const productimages = useRef();
    const [loadopen, setloadOpen] = useState(false);
    const [Catdata, setCatdata] = useState([]);

    const [imgfiles, setImgfiles] = useState([]);
    const [Issetimg, setIssetimg] = useState(false);
    const { id } = useParams();
    const [edit, setedit] = useState([]);
    const [fields, setfields] = useState({
        name: "",
        description: "",
        brand: "",
        price: "",
        category: "",
        images: [],
        countInStock: "",
        rating: "",
        oldprice: "",
        isFeatured: "",
    });

    useEffect(() => {
        Fetchdata('/api/category').then((res) => {
            setCatdata(res);
        })
    }, []);

    const [preview, setPreview] = useState([]);
    useEffect(() => {
        Fetchdata(`/api/product/${id}`).then((res) => {
            setfields(res);
            setPreview(res.images)

        })


    }, [])
    console.log(preview)
    const [items, setItems] = useState([]);



    // const addProductImg = () => {
    //     if(productimages.current.value==""){
    //          setsnack({ open: true, message: 'please add images to add', color: "error" });
    //     }
    //     const newItem = productimages.current.value;
    //     const newItems = [...items, newItem];
    //     setItems(newItems);
    //     setfields(prevFields => ({
    //         ...prevFields,
    //         images: newItems
    //     }));

    //     const imgGrid = document.querySelector('#imgGrid');
    //     const imgdata = `<div class='imgdiv'>
    //     <img src="${productimages.current.value}" alt="a.png" class="w-100"/>
    // </div>`;
    //     imgGrid.insertAdjacentHTML('beforeend', imgdata);
    //     productimages.current.value = "";
    // }

    // change value
    const changeValue = (e) => {

        setfields(() => ({
            ...fields,
            [e.target.name]: e.target.value

        }))
        console.log(fields)

    }
    const [snack, setsnack] = useState({
        open: false,
        message: "",
        color: ""
    })
    const [Files, setFiles] = useState([])

    const onChangeFile = async (e, apiEndPoint) => {
        try {
            const fd = new FormData();
            // fd.delete('images');
            const imgArr = [];
            setImgfiles(e.target.files)
            const files = e.target.files;
            setIssetimg(true)


            for (var i = 0; i < files.length; i++) {
                const file = files[i];
                imgArr.push(file);
                fd.append('images', file);
            }

            setFiles(imgArr);

            setfields(prev => ({
                ...prev,
                images: []
            }));

            PostData(apiEndPoint, fd).then((res) => {
                console.log(res);
                setfields(prev => ({
                    ...prev,
                    images: res.data
                }))

            });
        } catch (error) {
            console.log(error);
        }
    };


    const uploadProdx = (e,) => {
        e.preventDefault();
        const fd = new FormData();
        fd.append('name', fields.name);
        fd.append('description', fields.description);
        fd.append('brand', fields.brand);
        fd.append('price', fields.price);
        fd.append('oldPrice', fields.oldprice);
        fd.append('category', fields.category);
        fd.append('countInStock', fields.countInStock);
        fd.append('rating', fields.rating);
        fd.append('isFeatured', fields.isFeatured);

        if (fields.name !== "" &&
            fields.description !== "" &&
            fields.brand !== "" &&
            fields.price !== "" &&
            fields.category !== "" &&
            fields.countInStock !== "" &&
            fields.rating !== "" &&
            fields.oldprice !== "" &&
            fields.isFeatured !== "") {
            setloadOpen(true);
            window.scrollTo(0, 0);
            context.setProgress(20)

            try {
                Editdata(`/api/product/${id}`, fields).then((res) => {
                    setsnack({ open: true, message: 'Product Updated', color: "success" });
                    history('/');
                    setloadOpen(false);
                    console.log(fields.images);
                    context.setProgress(100)


                })
            }
            catch (err) {
                console.log(err)
            }
        } else {
            // if (fields.images.length == 0) {
            //     setsnack({ open: true, message: 'please add images to continue', color: "error" });
            // }
            if (fields.countInStock === "") {
                setsnack({ open: true, message: ' countInStock field is required ', color: "error" });
            }

            if (fields.rating === "") {
                setsnack({ open: true, message: 'rating field is required ', color: "error" });
            }
            if (fields.price === "") {
                setsnack({ open: true, message: 'Discounted Price field is required ', color: "error" });
            }
            if (fields.oldprice === "") {
                setsnack({ open: true, message: 'Regular price field is required ', color: "error" });
            }
            if (fields.isFeatured === "") {
                setsnack({ open: true, message: ' isFeatured field is required ', color: "error" });
            }
            if (fields.brand === "") {
                setsnack({ open: true, message: 'Brand field is required ', color: "error" });
                window.scrollTo(0, 300)
            }
            if (fields.category === "") {
                setsnack({ open: true, message: 'Category field is required ', color: "error" });
                window.scrollTo(0, 150);
            }
            if (fields.description === "") {
                setsnack({ open: true, message: 'Description field is required ', color: "error" });
                window.scrollTo(0, 0);
            }
            if (fields.name === "") {
                setsnack({ open: true, message: 'Title field is required ', color: "error" });
                window.scrollTo(0, 0);
            }





        }
    }

    const handleCategoryChange = (event) => {
        setfields(() => ({
            ...fields,
            category: event.target.value
        }))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setsnack({ open: false, message: '', color: "" });
    };


    useEffect(() => {
        let tmp = [];
        for (let i = 0; i < imgfiles.length; i++) {
            tmp.push(URL.createObjectURL(imgfiles[i]));
        }

        const objectUrls = tmp;
        setPreview(objectUrls);

        // free memory
        for (let i = 0; i < objectUrls.length; i++) {
            return () => {
                URL.revokeObjectURL(objectUrls[i]);
            }
        }
    }, [imgfiles]);




    return (
        <>
            <div className="row shadow pt-3 pb-3  m-4  justify-content-around align-items-center bg-w">
                <div className="col-sm-8">
                    <span className="prodview">Edit Product </span>
                </div>
                <div className="col-sm-4">
                    <CustomizedBreadcrumbs page2={"Product"} page1={"Product Upload"} />
                </div>
            </div>
            <Snackbar open={snack.open} autoHideDuration={3000} onClose={handleClose} >
                <Alert
                    severity={snack.color}
                    variant="filled"
                    sx={{ width: '100%' }}
                    onClose={handleClose}
                >
                    {snack.message}
                </Alert>
            </Snackbar>
            <div className="row shadow pt-3 pb-3  m-4 justify-content-around  bg-w">

                <div className="col-sm-12 ">
                    <form id="myForm" onSubmit={uploadProdx}>
                        <h3 className="uploadbasic mb-4 ps-2 "> To edit the Product, please enter your details  here.</h3>
                        <h5 className="mb-2 uploadbasic2 ms-3"><b>Title</b></h5>
                        <input type="text" placeholder="Type here..." className="w-98 inputfield mb-4 ms-3 me-2" name="name" value={fields.name} onChange={changeValue} />
                        <h5 className="mb-2 ms-3 uploadbasic2"><b>Description</b></h5>
                        <div className="reviewform w-100 d-flex justify-content-center ">
                            <textarea placeholder="Type here..." className="w-100 textarea ms-3 me-2" name="description" value={fields.description} onChange={changeValue}>

                            </textarea>

                        </div>
                        <div className="row  mt-3 bg-w d-flex gap-5 ms-2  me-2 mt-3">
                            <div className="col-7">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>Category</b></h5>
                                <Menu1 options={Catdata?.categoryListm || []} head="Category" size={500} value={fields.category.name} onChange={handleCategoryChange} />

                            </div>
                        </div>
                        <div className="row  align-items-center bg-w d-flex justify-content-between ms-2  me-2 mt-3">
                            <div className="col-5">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>Brand</b></h5>
                                <input type="text" placeholder="Type here..." className="w-100 inputfield mb-4 ms-2" name="brand" value={fields.brand} onChange={changeValue} />
                            </div>
                            <div className="col-5">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>isFeatured</b></h5>
                                <input type="text" placeholder="True/False..." className="w-100 inputfield mb-4 ms-2 " name="isFeatured" value={fields.isFeatured} onChange={changeValue} />
                            </div>
                        </div>
                        <div className="row  align-items-center bg-w d-flex justify-content-between ms-2  me-2 mt-3">
                            {loadopen === true && <div>
                                <Backdrop
                                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                                    open={true}
                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                            </div>}
                            <div className="col-5">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>Regular Price</b></h5>
                                <input type="text" placeholder="Type here..." className="w-100 inputfield mb-4 ms-2" name="oldprice" value={fields.oldprice} onChange={changeValue} />
                            </div>
                            <div className="col-5">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>Discounted Price</b></h5>
                                <input type="text" placeholder="Type here..." className="w-100 inputfield mb-4 ms-2 " name="price" value={fields.price} onChange={changeValue} />
                            </div>
                        </div>
                        <div className="row  align-items-center bg-w d-flex justify-content-between ms-2  me-2 mt-1">
                            <div className="col-5">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>Ratings</b></h5>
                                <input type="text" placeholder="Type here..." className="w-100 inputfield mb-4 ms-2" name="rating" value={fields.rating} onChange={changeValue} />
                            </div>
                            <div className="col-5">
                                <h5 className="mb-2 ps-2 uploadbasic2"><b>Count In Stock</b></h5>
                                <input type="text" placeholder="Type here..." className="w-100 inputfield mb-4 ms-2 " name="countInStock" value={fields.countInStock} onChange={changeValue} />
                            </div>
                        </div>
                        {/* <div className="maincloumn">
                            <h5 className="mb-2 ms-3 me-2 uploadbasic2"><b>Upload image</b></h5>
                            <input type="text" placeholder="Image URL here" className="w-98 inputfield mb-4 ms-3 " ref={productimages} />
                            <button className="btn btn-primary addbtn" onClick={addProductImg} type="button">Add</button>

                        </div> */}
                        <div className="imageuplaodouter w-100 mt-4">
                            <h4 className="mb-2 ps-2 ms-3 uploadbasic2"><b>Media & Published</b></h4>
                            <div className="uploadBox d-flex align-items-center mt-4">

                                {/* {preview?.length !== 0 && preview?.map((item, index) => (
                                    <div className="uploadimg" key={index}>
                                        {Issetimg === true ? (
                                            <img src={item} className="w-100 h-100" alt={`Preview ${index + 1}`} />
                                        ) : (
                                            fields.images && fields.images.length > 0 && fields.images.map((img, idx) => (
                                                <img key={idx} src={`${context.baseUrl}/uploads/${img}`} alt={`Image ${idx + 1}`} />
                                            ))
                                        )}
                                    </div>
                                ))} */}

                                {Issetimg && preview?.length > 0 ? (
                                    preview.map((item, index) => (
                                        <div className="uploadimg" key={index}>
                                            <img src={item} className="w-100 h-100" alt={`Preview ${index + 1}`} />
                                        </div>
                                    ))
                                ) : (
                                    fields.images && fields.images.length > 0 && fields.images.map((img, idx) => (
                                        <div className="uploadimg" key={idx}>
                                            <img src={`${context.baseUrl}/uploads/${img}`} alt={`Image ${idx + 1}`} />
                                        </div>
                                    ))
                                )}


                                < div className="uploadimg">
                                    <input type="file" multiple onChange={(e) => { onChangeFile(e, '/api/product/upload') }} name="images" />
                                    <div className="imageuploadinner d-flex flex-column">
                                        <span><FaRegImages /></span>
                                        <span>Upload Image</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div >

                {/* <div className="col-sm-4 ml-auto ">
                    <h3 className="uploadbasic mb-4 ps-2 ">Product Images</h3>
                    <div className="imggrid d-flex gap-3" id="imgGrid">

                    </div>
                </div> */}
                < button className="btn btn-primary  mt-3 ms-2 me-1 uploadme  d-flex justify-content-center align-items-center" type="submit" form="myForm" >
                    <span className="d-flex gap-3 align-items-center"> <span className="uploadicon"><MdCloudUpload /></span>Upload & Edit</span>
                </button >
            </div >
        </>
    )
}
export default Editpro;