
const { Category } = require("../models/category")
const { Product } = require("../models/products")

const express = require("express");
// const app = express();
// app.use(express.json());
const router = express.Router();
const multer = require('multer');
let imagesArr = [];
const fs = require("fs");
const path = require('path');
let categoryEditId;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.png')
    }
})

const upload = multer({ storage: storage })

// router.post('/upload', upload.array('images'), async (req, res) => {
//     // let imagesArr = [];
//     const files = req.files;

//     for (let i = 0; i < files.length; i++) {
//         imagesArr.push(files[i].filename);
//     }
//     console.log("images is")
//     console.log(imagesArr);

//     res.json(imagesArr);
// });
console.log(categoryEditId);
router.post(`/upload`, upload.array("images"), async (req, res) => {

    if (categoryEditId !== undefined) {
        // const product = await Product.findById(categoryEditId);

        // const images = product.images || [];

        // if (images.length !== 0) {
        //     for (const image of images) {
        //         fs.unlinkSync(path.join(__dirname, '..', 'uploads', image))
        //     }
        // }

        const product = await Product.findById(categoryEditId);
        const imagess = product.images ||[];
        if (imagess.length !== 0) {
            for (let image of imagess) {
                try {
                    fs.unlinkSync(path.join(__dirname, '..', 'uploads', image));
                } catch (err) {
                    if (err.code !== 'ENOENT') {
                        console.error('Error deleting file:', err);
                    }
                }
            }
        }
    }

    const files = req.files;
    imagesArr = [];
    for (let i = 0; i < files.length; i++) {
        imagesArr.push(files[i].filename);
    }
    console.log("images is")
    console.log(imagesArr);

    res.json(imagesArr);
});



// const cloudinary = require('cloudinary').v2;

// const pLimit = require('p-limit').default;


// cloudinary.config({
//     cloud_name: "dh2h12egr",
//     api_key: "582956518214281",
//     api_secret: "V6Q1t12_5QKf0nN8z81pSA_fX8c"

// })


router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const perpage = 5;
        const totalpost = await Product.countDocuments();
        const totalpages = Math.ceil(totalpost / perpage);

        if (page > totalpages) {
            return req.status(404).json({ message: "pages not found" })
        }

        const productList = await Product.find().populate("category")
            .skip((page - 1) * perpage)
            .limit(perpage)
            .exec()

        if (!productList) {
            res.status(500).json({ success: false })
        }
        res.status(200).json({
            "productlistm": productList,
            "totalpages": totalpages,
            "page": page,
        });
    } catch (err) {
        console.log(err);
    }

    // if (!productList) {
    //     res.status(500).json({ success: false })
    // }
    // res.send(productList);

})

router.post('/create', async (req, res) => {
    const category = await Category.findById(req.body.category)
    if (!category) {
        return res.status(404).json({
            message: 'invalid category'
        });
    }
    // console.log(imagesArr);
    // const limit = pLimit(2);
    // const imagesToUpload = req.body.images.map((image) => {
    //     return limit(async () => {
    //         const result = await cloudinary.uploader.upload(image);
    //         return result;
    //     })
    // });
    // const uploadStatus = await Promise.all(imagesToUpload);
    // const imgurl = uploadStatus.map((item) => {
    //     return item.secure_url
    // })

    // if (!uploadStatus) {
    //     return res.status(500).json({
    //         error: "images not upload",
    //         status: false
    //     })
    // }
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        brand: req.body.brand,
        price: req.body.price,
        category: category,
        images: imagesArr,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        oldprice: req.body.oldprice,
        isFeatured: req.body.isFeatured,
        dateCreated: req.body.dateCreated,
    });

    product = await product.save();
    if (!product) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
    res.status(201).json(product)
})

router.delete('/:id', async (req, res) => {

    const product = await Product.findById(req.params.id);
    const images = product.images;
    if (images.length !== 0) {
        for (let image of images) {
            try {
                fs.unlinkSync(path.join(__dirname, '..', 'uploads', image));
            } catch (err) {
                if (err.code !== 'ENOENT') {
                    console.error('Error deleting file:', err);
                }
            }
        }
    }


    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
        res.status(500).json({
            message: 'product not found',
            success: 'false'
        })
    }
    res.status(200).json({
        message: 'product deleted'
    })
})

router.get('/:id', async (req, res) => {
    categoryEditId = req.params.id
    const Productitem = await Product.findById(req.params.id);
    if (!Productitem) {
        res.status(500).json({
            message: 'product not found',
            success: 'false'
        })
    }
    res.status(201).json(Productitem)

})

router.put('/:id', async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            images:imagesArr,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            oldprice: req.body.oldprice,
            isFeatured: req.body.isFeatured,
            dateCreated: req.body.dateCreated,
        },
        { new: true }
    )
    if (!product) {
        return res.status(500).json({
            message: 'product cannot be found',
            success: false
        })
    }
    res.send(product);
})
// router.put('/:id', upload.array('images'), async (req, res) => {
//     const images = req.files.map(f => f.filename);

//     const product = await Product.findByIdAndUpdate(
//         req.params.id,
//         {
//             name: req.body.name,
//             description: req.body.description,
//             brand: req.body.brand,
//             price: req.body.price,
//             category: req.body.category,
//             countInStock: req.body.countInStock,
//             rating: req.body.rating,
//             oldprice: req.body.oldprice,
//             isFeatured: req.body.isFeatured,
//             dateCreated: req.body.dateCreated,
//             images: images.length ? images : req.body.images, // fallback to existing images if none uploaded
//         },
//         { new: true }
//     );

// });
module.exports = router;