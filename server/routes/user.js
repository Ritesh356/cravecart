const { User } = require('../models/user');
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();


router.post('/signup', async (req, res) => {
    const { username, phone, email, password } = req.body;

    try {
        const existingUser1 = await User.findOne({ email: email });
        const existingUser2 = await User.findOne({ phone:phone })
        if (existingUser1) {
            res.status(409).json({status:"false",msg:"user email already exist"})
        }
        if (existingUser2) {
            res.status(409).json({status:"false",msg:"user number already exist"})
        }
        const hashpassword = await bcrypt.hash(password, 10);
        const result = await User.create({
            username: username,
            email: email,
            phone: phone,
            password: hashpassword

        });

        const token = jwt.sign({ email: result.email, id: result._id }, process.env.JSON_WEB_TOKEN_SECRET_KEY);
        res.status(201).json({
            user: result,
            token: token
        })

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ msg: "something went wrong" })
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await User.findOne({ email: email });
        if (!existinguser) {
            res.status(404).json({ msg: "user not found !" })
        }
        const matchpassword = await bcrypt.compare(password, existinguser.password);
        if (!matchpassword) {
            return res.status(404).json({ msg: "invalid credentials" })
        }
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, process.env.JSON_WEB_TOKEN_SECRET_KEY);
        res.status(201).json({
            user: existinguser,
            token: token,
            msg: "user authenticated"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ msg: "something went wrong" })
    }
});

router.get('/', async (req, res) => {
    const userlist = await User.find();
    if (!userlist) {
        res.status(500).json({ success: false })
    }
    res.send(userlist);
})

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        res.status(500).json({ message: "user with this id is not found" })

    }
    res.status(200).send(user);
})

router.delete('/:id',async (req,res)=>{
    const deluser =await User.findByIdAndDelete(req.params.id);
    if(!deluser){
        res.status(500).json({message:"user with this id is not found"})
    }
    res.status(200).send({message:"user deleted"})
})

router.get('/get/count',async(req,res)=>{
    const usercount = await User.countDocuments((count)=>count);
    if(!usercount){
        res.status(500).json({success:false})
    }
    res.send({
        usercount:usercount
    })
})

router.put(`/:id`,async(req,res)=>{
    const{username,email,password,phone}=req.body;
    let newpassword;
    if(req.body.password){
        newpassword=bcrypt.hashSync(req.body.password,10)
    }else{
        newpassword=userExist.hashpassword;

    }
    const user=await User.findByIdAndUpdate(
        req.params.id,{
            username:username,
            password:password,
            email:email,
            password:newpassword

        },
        {new:true}
    )
})
module.exports = router;