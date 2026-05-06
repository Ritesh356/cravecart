const moongose=require("mongoose")

const UserSchema=moongose.Schema({
    username:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
})
UserSchema.virtual('id').get(function(){
return this._id.toHexString();
});
UserSchema.set('toJSON',{
    virtuals:true,
});
exports.User=moongose.model('user',UserSchema);
exports.UserSchema=UserSchema;