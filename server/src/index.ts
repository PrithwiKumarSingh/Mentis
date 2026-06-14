
import express from 'express'
import {main} from './db'
import jwt from 'jsonwebtoken'
import { User } from './Schema/user'
import cookieParser from "cookie-parser"
import { contentModel } from './Schema/content'
import {userMiddleware} from './middleware/middleware'
import {JWT_PASSWORD} from './config/config'
import { LinkModel } from './Schema/link'
import {random} from './utils/utils'
import cors from 'cors'
import { scraper } from './scraper'
import ogs from 'open-graph-scraper'

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials:true}));


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
        const {result} = await ogs({
            url : link
        })
        const data = await contentModel.create({
            type,
            title,
            link,
            metadata : {
                title : result.ogTitle || "",
                description : result.ogDescription || "",
                image : result.ogImage?.[0]?.url || ""
            },
            // @ts-ignore
            userId: req.userId,
            tags:[]
        })
        console.log(data);

        res.status(200).json({
            message : "Content Added Successfully"
        })

    }catch(e:any){
        console.error(e);
        return res.status(403).json({
            message : e.message || "Invalid Content"
        })
    }


})
app.get("/api/v1/content",userMiddleware, async ( req,res)=> {
    try{
        // @ts-ignore
        const userId = req.userId;
        const content = await contentModel.find({userId}).populate("userId","username");

        if(content.length===0){
            return res.status(200).json({
                message : "No content found",
                content :[]
            });
        }
           

        res.status(200).json({
            message : "Content fetched Successfully",
            content : content
        })
    }catch(err:any){
        console.log(err)
        res.status(403).json({
            message : "Error : ",
            error : err.message
        });
    }

})
app.delete("/api/v1/content",userMiddleware, async (req,res)=> {
    try{
        const contentId = req.body.contentId
        

        await contentModel.deleteOne({
            _id :contentId,  
            userId : req.userId
        })
        

        res.status(200).json({
            message : "Deleted Successfully"
        })
    }catch(e){
        res.status(403).json({
            message : e
        })
    }

})

app.post("/api/v1/brain/share",userMiddleware, async (req,res)=> {
    const share = req.body.share;
    if(share){

        const existingLink = await LinkModel.findOne({
            userId : req.userId
        })

        if(existingLink){
            res.json({
                hash : existingLink.hash
            })
            return;
        }

        const hash = random(10);
        await LinkModel.create({
            userId : req.userId,
            hash : hash
        })
        res.json({
            hash : hash
        })
    }else{
        await LinkModel.deleteOne({
            userId : req.userId
        })
        res.json({
            message : " Removed Link"
        })
    }
})

app.get("/api/v1/brain/:shareLink",async (req,res)=>{
    const hash = req.params.shareLink;

   
        const link = await LinkModel.findOne({
            hash
        })

    if(!link){
        res.status(411).json({
            message : "Sorry Incorrect input"
        })
        return;
    }

    // userID
    const content = await contentModel.find({
        userId : link.userId
    })

    const user = await User.findOne({
        _id: link.userId
    })

    if(!user){
        res.status(411).json({
            message : "user not found, error should idelly not happen"
        })

        return;
    }

    res.status(200).json({
        username : user.username, 
        content : content
    })

})



main().then(()=>  {
    app.listen(3000,()=>{
    console.log("Server Started On Port : 3000")
    })
}).catch((e:any)=>{
    console.log("Error : "+e)
})
