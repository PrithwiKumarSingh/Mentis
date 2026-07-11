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

if(!process.env.BACKEND_URL){
  throw new Error("BACKEND_URL missing");
}

export const BACKEND_URL = process.env.BACKEND_URL ;

if(!process.env.GOOGLE_CLIENT_ID){
  throw new Error("Client_id missing");
}
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

if(!process.env.GOOGLE_CLIENT_SECRET){
  throw new Error("Client_Secret missing");
}
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET