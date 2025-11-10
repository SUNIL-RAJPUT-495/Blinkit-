import { verify } from "jsonwebtoken";
import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Provide name"]
    },
    email: {
type :String,
require:[true,"provide email"],
unique:true
    },
    password :{
        type:String,
        require:[true,"provide passward"]
    },
    avatar:{
        type:String,
        default:""
    },
    mobile:{
        type:Number,
        defult :null
    },
    refresh_token:{
        type:String,
        defult :""
    },
    verify_email:{
        type:Boolean,
        defult :false
    },
    last_login_date : {
        type:Date,
        defult :""
    },
    status:{
        type:String,
        enum:["Active","Inactive","Suspanded"],
        defult :"Active"
    },
    address_details:{
        type: mongoose.Schema.ObjectId,
        ref:'address'
    },
    shopping_cart:{
        type: mongoose.Schema.ObjectId,
       ref:'cart'
    }
}) 