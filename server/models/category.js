// name: { type: String, required: true }
// name is a field of type String.
// required: true means this field must be provided when creating a new category
// images: [{ type: String, required: true }]
// images is an array of strings.
// Each item in the array must be a string and is required.
// This is useful for storing multiple image URLs or file paths for each category.
// color: { type: String, required: true }
// color is a field of type String.


const mongoose =require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    images:[ 
        {type:String,
        required:true}
    ],
    color:{
        type:String,
        required:true
    }
       
    
})

exports.Category=mongoose.model('Category',categorySchema,'category');