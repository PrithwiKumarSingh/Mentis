import { useRef, useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/CreateContentModal";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { BACKEND_URL } from "../config";
import {Slide, toast } from "react-toastify";


export function Signin(){

    const usernameRef = useRef <HTMLInputElement>(null);
        const passwordRef = useRef <HTMLInputElement>(null);
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);
    
        async function signin(){
            try{
                setLoading(true)
            const username = usernameRef.current?.value.trim();
            const password = passwordRef.current?.value.trim();
            
            const response = await axios.post(BACKEND_URL + "/api/v1/signin", {username, password}, {withCredentials:true})

            localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", response.data.username);
    
            navigate('/dashboard');
            toast("Login Successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "success", 
                transition: Slide,
                autoClose : 3000
            })
            } catch(err){
                toast("Invalid username or password",{
                    position : "bottom-right",
                    theme : "colored", 
                    type : "error",
                    transition: Slide, 
                    autoClose : 3000
                })
            }finally{
                setLoading(false)
                
            }
            
        }



    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#dbd8d8]">
            <div className="flex flex-col bg-white p-8 rounded-xl">
                <div className="text-3xl font-bold text-blue-400">
                    Sign in 
                </div>
                <div className="text-md font-semibold text-slate-500">
                    Capture ideas before they disappear.
                </div>
            <div className="flex flex-col gap-2 mt-4  ">
                <Input referance={usernameRef} placeholder={"username"} />
                <Input referance={passwordRef} placeholder={"password"} />
            </div>
            <div className="text-md text-slate-600 mt-2 hover:text-red-600">
                <a href="/">Forgot password ?</a>
            </div>
            <div className="mt-6">
                <Button  
                    loading={loading}
                    onClick={()=> signin()} 
                    variant="primary" 
                    text={loading ? "Authenticating..." : "Sign In"} 
                    size="md" 
                    fullWidth={true} /> 
            </div>
            <div className="mt-4">
                Don't have an account? 
                <Link to={"/signup"} className="pl-1 font-medium hover:text-blue-900 transition-all duration-200 underline">
                      Sign up now!
                </Link>
            </div>
            </div>
        </div>
    )
}