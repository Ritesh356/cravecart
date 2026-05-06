
const express=require('express');
const app=new express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const path=require("path");
const authjwt = require('../server/jwt');

app.use(cors());
app.options('*splat',cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// middleware

app.use(bodyParser.json());
app.use(authjwt().unless({
    path: [
    { url: "/api/user/signup", methods: ["POST"] },
    { url: "/api/user/signin", methods: ["POST"] }
  ]
  }));


// routes
const categoryRouter = require('./routes/category')
app.use('/api/category', categoryRouter);


const productRouter = require('./routes/products')
app.use('/api/product',productRouter);

const userRouter = require('./routes/user')
app.use('/api/user',userRouter);

// DATABASE 
mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("database is ready..."),
    // start the server
app.listen(process.env.PORT ,()=>{
    console.log(`server is running at http://localhost:${process.env.PORT}`);
})
})
.catch((err)=>{
    console.log(err);
})


