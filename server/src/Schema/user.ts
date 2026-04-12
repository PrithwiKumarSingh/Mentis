import mongoose, {Schema,model} from "mongoose";

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        min:3,
        max:10,
        unique:true
    },
    password : {
        type : String, 
        required : true,
        min:8,
        max:20,

    }

},{timestamps:true})

export const User = model("user",userSchema);


