import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
// import { Input } from "../components/ui/CreateContentModal";
import { Navigate } from "react-router-dom";
import axios from 'axios'
import { BACKEND_URL } from "../config";
// import {Slide, toast } from "react-toastify";
import {motion} from "motion/react"
import { FcGoogle } from "react-icons/fc";


export default function Signin(){

    // const usernameRef = useRef <HTMLInputElement>(null);
        // const passwordRef = useRef <HTMLInputElement>(null);
        // const navigate = useNavigate();
        const [loading, setLoading] = useState(false);
        const [ authenticated, setAuthenticated] = useState<boolean | null>(null);
    
        // async function signin(){
        //     try{
        //         setLoading(true)
        //     const username = usernameRef.current?.value.trim();
        //     const password = passwordRef.current?.value.trim();
            
        //     const response = await axios.post(BACKEND_URL + "/api/v1/signin", {username, password}, {withCredentials:true})

        //     localStorage.setItem("username", response.data.username);
        //     localStorage.setItem("token", response.data.token )
    
        //     navigate('/dashboard');
        //     toast("Login Successfully", {
        //         position : "bottom-right",
        //         theme : "colored",
        //         type : "success", 
        //         transition: Slide,
        //         autoClose : 3000
        //     })
        //     } catch(err){
        //         toast("Invalid username or password",{
        //             position : "bottom-right",
        //             theme : "colored", 
        //             type : "error",
        //             transition: Slide, 
        //             autoClose : 3000
        //         })
        //     }finally{
        //         setLoading(false)
                
        //     }
            
        // }

        async function verifyUser(){
      try{
        await axios.get(`${BACKEND_URL}/api/v1/me`,
        {
          withCredentials : true
        }
      );
      setAuthenticated(true);
      }catch(err){
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        setAuthenticated(false)
      }
     }
  
  useEffect(()=>{

     verifyUser();
  },[])

  if(authenticated == true){
    return <Navigate to={"/dashboard"} replace/>
  }

        async function conWithGoogle(){
            console.log("continue with google clicked !")
            window.location.href = "http://localhost:3000/api/auth/google";
            setLoading(false)
        }



    return (
        <div className="h-screen w-screen flex items-center justify-center bg-[#dbd8d8]">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                 className="flex flex-col bg-linear-to-br from-slate-50 to-indigo-50 p-8 rounded-xl">
                <div className="text-3xl font-bold text-blue-400">
                    Welcome back.
                </div>
                <div className="text-md font-semibold text-slate-500">
                    Capture ideas before they disappear.
                </div>
            {/* <div className="flex flex-col gap-2 mt-4  ">
                <Input referance={usernameRef} placeholder={"username"} />
                <Input referance={passwordRef} placeholder={"password"} />
            </div> */}
            {/* <div className="text-md text-slate-600 mt-2 hover:text-red-600">
                <a href="/">Forgot password ?</a>
            </div> */}
            {/* <div className="mt-6">
                <Button  
                    style="text-white"
                    loading={loading}
                    onClick={signin} 
                    variant="primary" 
                    text={loading ? "Authenticating..." : "Sign In"} 
                    size="md" 
                    fullWidth={true} /> 
            </div> */}
            <div className="mt-6">
                <Button
                    style="text-black"  
                    loading={loading}
                    onClick={conWithGoogle} 
                    variant="secondary" 
                    startIcon={<FcGoogle size={32}/>}
                    text={loading ? "Authenticating..." : "Continue with Google"} 
                    size="md" 
                    fullWidth={true} /> 
            </div>
            {/* <div className="mt-4">
                Don't have an account? 
                <Link to={"/signup"} className="pl-1 font-medium hover:text-blue-900 transition-all duration-200 underline">
                      Sign up now!
                </Link>
            </div> */}
            </motion.div>
        </div>
    )
}