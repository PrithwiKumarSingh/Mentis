
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


export function Sidebar({username, loggedout,filter, setFilter} : { 
    username? : string ;
    loggedout? : boolean;
    setFilter : (type:string)=>void;
    filter : string;
}){

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);

    async function logout(){
        try{
            setLoading(true);
        const res = await axios.post(`${BACKEND_URL}/api/v1/logout`,{}, {withCredentials:true});
        localStorage.removeItem("token")
        console.log(res);
        navigate("/signin")
        }catch(err){
            alert(err)
        }finally{
            setLoading(false);
        }
    }
    return(
        <div className="p-4 w-64 relative">
            <div className="flex items-center gap-2 pb-4 mt-8 ml-4">
                <div className="text-[#5147E3]">
                    <LuBrainCircuit size={36}/>
                </div>
                <div className="text-4xl font-bold text-slate-700 hover:cursor-pointer">
                    <a href="/dashboard">
                        Mentis
                    </a>
                    
                </div>
            </div>

            <div className="pt-6 flex flex-col gap-2">
                <SidebarItem active={filter==="all"} onClick={()=>setFilter("all")} text="All" icon={<MdOutlineDensitySmall size={24}/>}  />
                <SidebarItem active={filter==="tweets"} onClick={()=>setFilter("tweets")} text="Tweets" icon={<FiTwitter size={24}/>}  />
                <SidebarItem active={filter==="video"} onClick={()=>setFilter("video")} text="Videos" icon={<FiYoutube size={24}/>}  />
                <SidebarItem active={filter==="document"} onClick={()=>setFilter("document")} text="Documents" icon={<GrDocumentText size={22}/>}  />
                <SidebarItem active={filter==="link"} onClick={()=>setFilter("link")} text="Links" icon={<IoLink size={24} />}  />
                <SidebarItem active={filter==="tag"} onClick={()=>setFilter("tag")} text="Tags" icon={<FiHash size={24}/>}  />
            </div>

            {
                (loggedout ? <div className="absolute bottom-10 flex gap-3 items-center justify-between mt-100 bg-gray-200 w-full px-4 py-2 rounded-xl">

                {
                    (username && <div className="text-md font-medium">
                    {
                        username?.toUpperCase()
                    }
                </div>)
                }
                
                <Button loading={loading} onClick={logout} variant="danger" size="sm" text={"Logout"} endIcon={<IoLogOutOutline size={24}/>} />
            </div> : "")
            }

            
        </div>
    )
}