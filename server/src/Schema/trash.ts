import mongoose, {model, Schema} from "mongoose"

const contentType =  ['tweets', 'video', 'document', 'link', "tag", ]
const trashSchema = new Schema({
    type : {
        type : String,
        enum : contentType,
        required : true,
    },
    title : {
        type:String,
        required : true,
        
    },
    link : {
        type : String,
        required : true
    },
    metadata : {
        title : String,
        description : String, 
        image : String
    },
    deletedAt: {
        type : Date,
        default : Date.now,
        expires : 60 * 60 * 24 * 30,
    },
    tags : [{type: mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type: mongoose.Types.ObjectId, ref:"user", required:true}
}, {timestamps:true})

export const trashModel = model("trash",trashSchema);