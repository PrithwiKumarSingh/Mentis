import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Twitter } from "../Embed/Twitter";
import { Youtube } from "../Embed/Youtube";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useState } from "react";
import { ShareContentModel } from "./ShareContentModel";
import { Slide, toast } from "react-toastify";
import {motion} from "motion/react"
import { RiLoopLeftFill } from "react-icons/ri";


interface metadata{
    title? : string; 
    description?: string; 
    image? : string;
}


interface CardProps{
    type : string; 
    link : string; 
    title : string; 
    metadata? : metadata;
    _id : string; 
    refresh? : ()=>void;
    createdAt: string;
    isTrash? : boolean;
    trashRefresh? : ()=>void
}

export function Card({type, link, title, metadata, _id, createdAt, isTrash, trashRefresh, refresh}: CardProps){
    const [shareModel, setShareModel] = useState(false);
    const [loading, setLoading] = useState(false)
    const [recover, setRecover] = useState(false)


    async function DeleteItems(_id:string){
        try{
            setLoading(true);
        await axios.delete(`${BACKEND_URL}/api/v1/content`, 
            {
            data : {
            contentId : _id
            },withCredentials:true
        } 
        ); 
        refresh?.();
        await trashRefresh?.();
        toast("Delete Successfully", {
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

    async function trashContentDelete(_id:string){
            await axios.delete(`${BACKEND_URL}/api/v1/trash`, 
            {
            data : {
            contentId : _id
            },withCredentials:true
        } 
        ); 
        
    }

     async function PermanentDelete(_id:string){
        try{
            setLoading(true);
            await trashContentDelete(_id);
        await trashRefresh?.();
        toast("Permanent Deleted Successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "warning", 
                transition: Slide,
                autoClose : 3000
            })


    }catch(err:any){
        toast.error(
            err?.response?.data?.message || "Something went wrong"
        )
    }finally{
        setLoading(false);
    }
    }

    async function recovery(_id : string){
        try{
            setRecover(true)
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            type,
            title,
            link,
            metadata
            
        }, {withCredentials:true})
         
         toast(" content recoverd successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "success", 
                transition: Slide,
                autoClose : 3000
            })
            await trashContentDelete(_id);
            await refresh?.();
            await trashRefresh?.();
    }catch(err:any){
        toast(err, {
                position : "bottom-right",
                theme : "colored",
                type : "error", 
                transition: Slide,
                autoClose : 3000
            })
    }finally{
        setRecover(false);
    }
    }

    

    
    return(
        <div>

        <ShareContentModel open={shareModel} onClose={()=>{setShareModel(false)}} metadata={metadata} link={link}/>
        < motion.div
        initial={{opacity:0, y:-20}}
        animate={{opacity:2, y:0}}
        transition={{duration:0.35}}
         className=" hover:shadow-xl hover:border-purple-400 transition-all duration-100  p-4 border border-gray-200 bg-white h-125 rounded-2xl min-h-fit md:min-h-48  min-w-9 md:overflow-y-scroll [&::-webkit-scrollbar]:hidden">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-xl font-medium text-[#0E1522]">
                    <div>
                        <DocumentIcon size="md"/>
                    </div>
                    {title ? title : metadata?.title}
                </div>
                <div>
                    {
                        isTrash ? <div className="flex items-center gap-2">
                    <div onClick={()=>{recovery(_id)}} className="cursor-pointer  hover:text-[#5046E4] hover:scale-105 transition ease-in-out duration-100">
                        {
                         recover ? (
                                    <div className="h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <RiLoopLeftFill size={24}/>
                                )
                            }
                     </div>
                     <div onClick={()=>PermanentDelete(_id)} className="hover:text-red-600 hover:scale-105 transition-all duration-100">
                        {
                            loading ? <div className="h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div> :  <DeleteIcon  size="md"/> 
                        }
                        
                    </div>
                    
                </div>


                        : <div className="flex items-center gap-2">
                    <div onClick={()=>{setShareModel(true)}} className="cursor-pointer hover:text-[#5046E4] hover:scale-105 transition ease-in-out duration-100">
                        <ShareIcon size="md"/>
                     </div>
                     <div onClick={()=>DeleteItems(_id)} className="hover:text-red-600 hover:scale-105 transition-all duration-100">
                        {
                            loading ? <div className="h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div> :  <DeleteIcon  size="md"/> 
                        }
                        
                    </div>
                    
                </div>
                    }
                </div>
            </div>

            

            <div>
                {
                    type==="video" ?
                         <Youtube link={link}/> :
                    type === "tweets" ?   
                        <Twitter link={link}/> :   (
                            <div 
                            className=" overflow-hidden mt-4 p-2">
                                <a rel="noopener noreferrer" className=" max-w-full cursor-pointer " target="_blank" href={link}>
                                    <img loading="lazy" className="max-w-full border border-gray-400 rounded-2xl hover:scale-105 transition-all duration-200 " src={metadata?.image} alt="" />
                                </a>
                            </div>

                    )
                    
            }   
            </div>
            <div>
                {
                    !(type == "tweets") && (metadata && <div className="mt-2 max-h-24">
                        
                        <div className=" p-4 rounded-xl bg-slate-100 max-h-38 md:overflow-y-scroll scrollbar-none [&::-webkit-scrollbar]:hidden">
                            <div className=" flex justify-between">
                                <div className="font-semibold italic">
                                    Description
                                </div>
                                    <p className=" text-sm text-[#4138B8] font-normal italic uppercase">
                                        {new Date(createdAt).toLocaleString("en-IN", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                            </div>

                            

                        <div className="italic">
                            {
                                `"${metadata.description || "no available"}  "`
                            }
                        </div>
                            
                        </div>
                    </div>)
                }
            </div>
            
            

            </motion.div>
        
        
        </div>
    )
}