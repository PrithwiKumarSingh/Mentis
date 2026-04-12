import mongoose, {model, Schema} from "mongoose"

const contentSchema = new Schema({
    type : String,
    title : String,
    link : String,
    tags : [{type: mongoose.Types.ObjectId, ref:"Tag"}],
    userId : {type: mongoose.Types.ObjectId, ref:"User", required:true}
})

export const contentModel = model("Content",contentSchema);