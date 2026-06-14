import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Twiiter } from "../Embed/Twitter";
import { Youtube } from "../Embed/Youtube";
import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { useState } from "react";
import { ShareContentModel } from "./ShareContentModel";
import { useContent } from "../hooks/useContent";





export function Card({type, link, title, metadata, _id}){
    
    const {refresh} = useContent();
    async function DeleteItems(_id:string){
        await axios.delete(`${BACKEND_URL}/api/v1/content`, 
            {
            data : {
            contentId : _id
            },withCredentials:true
        } 
        ); 

        await refresh();
    }



   const [shareModel, setShareModel] = useState(false);

    
    return(
        <div>

        <ShareContentModel open={shareModel} onClose={()=>{setShareModel(false)}} metadata={metadata} link={link}/>
        <div className="p-4 border border-gray-200 bg-white h-125 rounded-sm min-h-48 min-w-9 ">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-xl font-medium text-[#0E1522]">
                    <div>
                        <DocumentIcon size="md"/>
                    </div>
                    {title ? title : metadata.title}
                </div>
                <div className="flex items-center gap-2">
                    <div onClick={()=>{setShareModel(true)}} className="cursor-pointer hover:text-[#5046E4] hover:scale-105 transition-all duration-200">
                        <ShareIcon size="md"/>
                     </div>
                     <div onClick={()=>DeleteItems(_id)} className="hover:text-red-600 hover:scale-105 transition-all duration-200">
                        <DeleteIcon  size="md"/> 
                    </div>
                    
                </div>
            </div>

            

            <div>
                {
                    type=="video" ?
                         <Youtube link={link}/> :
                    type == "tweets" ?   
                        <Twiiter link={link}/> :   (
                            <div 
                            className=" overflow-hidden mt-4 p-2">
                                <a className=" max-w-full cursor-pointer " target="_blank" href={link}>
                                    <img className="max-w-full rounded-2xl hover:scale-105 transition-all duration-200 " src={metadata.image} alt="" />
                                </a>
                            </div>

                    )
                    
            }   
            </div>
            <div>
                {
                    metadata && <div className="mt-2 max-h-24">
                        
                        <div className="bg-[#E0E7FF] text-[#4138B8] p-4 rounded-xl max-h-38 overflow-y-scroll scrollbar-none [&::-webkit-scrollbar]:hidden">
                            <div className="font-semibold">
                            Description
                        </div>
                        <div className="italic">
                            {
                                `"${metadata.description}"`
                            }
                        </div>
                            
                        </div>
                    </div>
                }
            </div>


            </div>
        
        
        </div>
    )
}