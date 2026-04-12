
import express from 'express'
import {main} from './db'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { User } from './Schema/user'
import cookieParser from "cookie-parser"
import { contentModel } from './Schema/content'
import {userMiddleware} from './middleware/middleware'
import {JWT_PASSWORD} from './config/config'

const app = express();
app.use(express.json());
app.use(cookieParser());


app.post("/api/v1/signup",async (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    try{
        await User.create({
            username : username,
            password : password
        })

        res.status(200).json({
            message : "user signup successfully"
        })
    }catch(e){
        res.status(411).json({
            message:"user already exits !"
        })
    }
})
app.post("/api/v1/signin",async (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const existingUser = await User.findOne({username, password});

        if(!existingUser){
            return res.status(403).json({
                message:"Invalid Credentials"
            })
        }

        const token = jwt.sign({
                id : existingUser._id
            },JWT_PASSWORD)

            res.cookie("token", token);

            res.status(200).json({
                message:"Signin Successfully"
            })

    }catch(e){
        res.status(500).json({
            message: "Unknown error occurred"
        })
    } 

})
app.post("/api/v1/content",userMiddleware , async (req,res)=> {

    try{
        const type = req.body.type;
        const title = req.body.title;
        const link = req.body.link;
        await contentModel.create({
            type,
            title,
            link,
            // @ts-ignore
            userId: req.userId,
            tags:[]
        })

        res.status(200).json({
            message : "Content Added Successfully"
        })

    }catch(e){
        res.send(403).json({
            message : "Invalid Content"
        })
    }


})
app.get("/api/v1/content",()=> {

})
app.delete("/api/v1/content",()=> {

})
app.post("/api/v1/brain/share",()=> {

})

app.get("/api/v1/brain/:shareLink",()=>{

})

main().then(()=>  {
    app.listen(3000,()=>{
    console.log("Server Started On Port : 3000")
    })
}).catch((e:any)=>{
    console.log("Error : "+e)
})
