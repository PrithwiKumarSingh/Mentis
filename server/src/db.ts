import mongoose  from "mongoose";
import {DB_CONNECT} from './config/config'

export const main = async ()=>{
    await mongoose.connect(DB_CONNECT);
    console.log("DB Connected Successfully"); 
}
