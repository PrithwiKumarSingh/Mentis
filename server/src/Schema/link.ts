import mongoose from 'mongoose'

const LinkSchema   = new mongoose.Schema({
    hash : { 
        type : String, 
        
    }, 
    userId : {
        type : mongoose.Types.ObjectId, 
        ref : "user",
        required : true
    }
})

export const LinkModel = mongoose.model('Links', LinkSchema);