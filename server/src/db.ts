import mongoose  from "mongoose";

export const main = async ()=>{
    await mongoose.connect("mongodb+srv://CoderPrithwi:Prithwi%40123@codingprithwi.suswp5x.mongodb.net/Brainly");
    console.log("DB Connected Successfully"); 
}
