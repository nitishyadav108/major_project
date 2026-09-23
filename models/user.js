const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose").default;
//as in the latest node version it returns object but it should be a function

const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
})

userSchema.plugin(passportLocalMongoose);


module.exports=mongoose.model("User",userSchema);