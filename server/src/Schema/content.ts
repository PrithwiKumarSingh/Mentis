import mongoose, {model, Schema} from "mongoose"

const contentType =  ['tweets', 'video', 'document', 'link', "tag", ]
const contentSchema = new Schema({
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
    description : {
        type : String,
    },
    tags : [{type: mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type: mongoose.Types.ObjectId, ref:"user", required:true}
})

export const contentModel = model("Content",contentSchema);