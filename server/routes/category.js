const { Category } = require("../models/category");

const express = require('express')
const router = express.Router();


const cloudinary = require('cloudinary').v2;

const pLimit = require('p-limit').default;


cloudinary.config({
    cloud_name: "dh2h12egr",
    api_key: "582956518214281",
    api_secret: "V6Q1t12_5QKf0nN8z81pSA_fX8c"

})

router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page);
        const perpage = 4;
        const totalpost = await Category.countDocuments();
        const totalpages = Math.ceil(totalpost / perpage);

        if (page > totalpages) {
            return req.status(404).json({ message: "pages not found" })
        }

        const categoryList = await Category.find()
        .skip((page-1)*perpage)
        .limit(perpage)
        .exec()
        
        if (!categoryList) {
            res.status(500).json({ success: false })
        }
        res.status(200).json({
            "categoryListm":categoryList,
            "totalpages":totalpages,
            "page":page, 
        });

    } catch (err) {
        console.log(err);
    }
})

router.post('/create', async (req, res) => {
    const limit = pLimit(2);
    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });
    const uploadStatus = await Promise.all(imagesToUpload);
    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "images not upload",
            status: false
        })
    }

    let category = new Category({
        name: req.body.name,
        images: imgurl,
        color: req.body.color
    })

    if (!category) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
    category = await category.save();

    res.status(201).json(category);



})

router.get('/:id', async (req, res) => {
    const categoryList = await Category.findById(req.params.id);
    if (!categoryList) {
        res.status(500).json({ message: `category id not found` })
    }
    res.status(200).send(categoryList);
})


router.delete('/:id', async (req, res) => {
    const deleteUser = await Category.findByIdAndDelete(req.params.id);
    if (!deleteUser) {
        res.status(500).json({
            message: 'category not found',
            success: 'false'
        })
    }
    res.status(200).json({
        message: 'category deleted'
    })
})

router.put('/:id', async (req, res) => {
    const limit = pLimit(2);
    imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })

    })
    const uploadStatus = await Promise.all(imagesToUpload);
    const imgurl = uploadStatus.map((item) => {
        return item.secure_url
    })

    if (!uploadStatus) {
        return res.status(500).json({
            error: "images not upload",
            status: false
        })
    }

    const category = await Category.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        }, { new: true }
    )
    if (!category) {
        return res.status(500).json({
            message: 'category cannot be found',
            success: false
        })
    }
    res.send(category);
})


module.exports = router;