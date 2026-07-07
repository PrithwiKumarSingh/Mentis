import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import {JWT_PASSWORD} from '../config/config'



export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    
    const {token} = req.cookies;
    console.log(token);

    if(!token){
        return res.status(401).json({
            message : "Token doesn't exist"
        })
    }

    const payload = jwt.verify(token as string,JWT_PASSWORD) as JwtPayload;

    if(!payload)
        throw new Error("Id Doesn't exist !")

    // @ts-ignore
    req.userId = payload.id;

    next();

}