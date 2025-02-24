import mongoose from "mongoose";

let userSchema = new mongoose.Schema({

    username:{
        type:String,
        required: true,
    },
    fullname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    }

})

let userModel = mongoose.model("user",userSchema,"User");

export default userModel