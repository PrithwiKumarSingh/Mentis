import dotenv from "dotenv";
dotenv.config();

if (!process.env.JWT_PASSWORD) {
  throw new Error("JWT_PASSWORD missing");
}

export const JWT_PASSWORD = process.env.JWT_PASSWORD;

if(!process.env.DB_CONNECT){
    throw new Error("DB_CONNECT missing");
}

export const DB_CONNECT = process.env.DB_CONNECT;

if(!process.env.FRONTEND_URL){
  throw new Error("Frontend Url missing");
}

export const FRONTEND_URL = process.env.FRONTEND_URL ;