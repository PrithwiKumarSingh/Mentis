import mongoose, {model, Schema} from "mongoose"

const contentSchema = new Schema({
    type : {
        type : String,
        required : true,
        min : 5, 
        max : 20
    },
    title : String,
    link : String,
    tags : [{type: mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type: mongoose.Types.ObjectId, ref:"user", required:true}
})

export const contentModel = model("Content",contentSchema);