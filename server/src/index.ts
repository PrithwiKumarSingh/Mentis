
import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

jwt.sign("lsfjldj","fjkdl");

const app = express();

app.post("/api/v1/signup",(req,res)=> {
    const data = req.body;
    
    
})
app.post("/api/v1/signin",()=> {

})
app.post("/api/v1/content",()=> {

})
app.get("/api/v1/content",()=> {

})
app.delete("/api/v1/content",()=> {

})
app.post("/api/v1/brain/share",()=> {

})

app.get("/api/v1/brain/:shareLink",()=>{

})

app.listen(3000,()=>{
    console.log("Server Started On Port : 3000")
})