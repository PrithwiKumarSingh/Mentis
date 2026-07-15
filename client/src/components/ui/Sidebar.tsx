import { SidebarItem } from "../icons/SidebarItem";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { IoLink } from "react-icons/io5";
import { FiHash } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";
import { Button } from "./Button";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { MdOutlineDensitySmall } from "react-icons/md"
import { useState } from "react";
import { Slide, toast } from "react-toastify";
import { MdOutlineClose } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import {motion} from "motion/react"


export function Sidebar({username, loggedout,filter, setFilter, onClose} : { 
    username? : string ;
    loggedout? : boolean;
    setFilter : (type:string)=>void;
    filter? : string;
    onClose? : ()=>void;
}){


    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

     async function logout(){
        try{
            setLoading(true);
        await axios.post(`${BACKEND_URL}/api/v1/logout`,{}, {withCredentials:true});
        localStorage.removeItem("token")
        navigate("/auth/google")
        toast("Logout Successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "warning", 
                transition: Slide,
                autoClose : 3000
            })
        }catch(err:any){
            toast(err, {
                position : "bottom-right",
                theme : "colored",
                type : "error", 
                transition: Slide,
                autoClose : 3000
            })
        }finally{
            setLoading(false);
        }
    }
    return(
        <motion.div
            initial={{x:-40}}
            animate={{x:0}}
            transition={{duration:0.35}}
             className="p-4 max-w-64 relative ">
            <div className="flex items-center gap-2 pb-4 mt-8 ml-4">
                <div className="text-[#5147E3]">
                    <LuBrainCircuit size={36}/>
                </div>
                <div className="text-4xl font-bold text-slate-700 hover:cursor-pointer dark:text-white">
                    <a href="/dashboard">
                        Mentis
                    </a>
                    
                </div>
                <div onClick={onClose} className="md:hidden ml-8 bg-[#f2f5fc] dark:bg-white/10 border border-gray-300 rounded-full p-2">
                    <MdOutlineClose size={32}/>
                </div>
            </div>

            <div className="pt-6 flex flex-col gap-2 dark:text-white">
                <SidebarItem active={filter==="all"} onClick={()=> {onClose?.(); setFilter("all")}} text="All" icon={<MdOutlineDensitySmall size={24}/>}  />
                <SidebarItem active={filter==="tweets"} onClick={()=>{setFilter("tweets"); onClose?.()}} text="Tweets" icon={<FiTwitter size={24}/>}  />
                <SidebarItem active={filter==="video"} onClick={()=>{setFilter("video"); onClose?.()}} text="Videos" icon={<FiYoutube size={24}/>}  />
                <SidebarItem active={filter==="document"} onClick={()=>{setFilter("document"); onClose?.()}} text="Documents" icon={<GrDocumentText size={22}/>}  />
                <SidebarItem active={filter==="link"} onClick={()=>{setFilter("link"); onClose?.()}} text="Links" icon={<IoLink size={24} />}  />
                <SidebarItem active={filter==="tag"} onClick={()=>{setFilter("tag"); onClose?.()}} text="Tags" icon={<FiHash size={24}/>}  />
                {
                    loggedout &&
                    <SidebarItem active={filter==="trash"} onClick={()=>{setFilter("trash"); onClose?.()}} text="Trash" icon={<FaRegTrashCan size={24}/>}  />
                }
            </div>

            {
                (loggedout ? <div className="absolute mt-30 md:mt-90 flex  items-center justify-between  bg-slate-300 w-full rounded-xl px-6 py-3 dark:font-semibold dark:text-white dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/20 dark:shadow-lg dark:transition-all dark:focus:outline-none dark:focus:ring-2 dark:focus:ring-white/50">

                {
                    (username && <div className="text-md font-medium">
                    {
                        username
                        
                    }
                </div>)
                }
                
                <Button 
                    loading={loading} 
                    onClick={logout} 
                    variant="danger" 
                    size="sm" 
                    text={"Logout"} 
                    endIcon={<IoLogOutOutline size={24}/>} />
            </div> : "")
            }

            
        </motion.div>
    )
}