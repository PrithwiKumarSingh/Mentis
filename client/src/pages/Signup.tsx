
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/CreateContentModal";
import { useRef, useState } from "react";
import axios from 'axios'
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";



export function Signup(){

    const usernameRef = useRef <HTMLInputElement>(null);
    const passwordRef = useRef <HTMLInputElement>(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    async function singup(){
        try{
            setLoading(true);
        const username = usernameRef.current?.value.trim();
        const password = passwordRef.current?.value.trim();
        
        await axios.post(BACKEND_URL + "/api/v1/signup", {username, password})

        navigate('/signin');
        alert("You have signed up");
        }catch(err){
            alert(err);
        }finally{
            setLoading(false)
        }
    }


    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#dbd8d8]">
            <div className="flex flex-col bg-white p-8 rounded-xl">
                <div className="text-3xl font-bold text-blue-400">
                    Sign up
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
                <Button loading={loading} onClick={()=>singup()} variant="primary" text={loading ? "Creating account..." : "Sign up"} size="md" fullWidth={true} /> 
            </div>
            <div className="mt-4">
                Already have an account?
                <Link to={"/signin"} className="pl-1 font-medium hover:text-blue-900 transition-all duration-200 underline">
                      Sign in now!
                </Link>
            </div>
            </div>
        </div>
    )
}