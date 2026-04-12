import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import {JWT_PASSWORD} from '../config/config'



export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    
    const {token} = req.cookies;

    if(!token)
        throw new Error("Token Doesn't exits !")

    const payload = jwt.verify(token as string,JWT_PASSWORD);

    if(!payload)
        throw new Error("Id Doesn't exist !")

    // @ts-ignore
    req.userId = payload.id;

    next();

}