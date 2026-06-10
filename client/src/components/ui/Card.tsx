import { DeleteIcon } from "../icons/DeleteIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";




export function Card({type, link, title}){
    return(
        <div>


        <div className="p-4 border border-gray-200 bg-white max-w-72 rounded-sm min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center gap-2 text-xl font-medium text-[#0E1522]">
                    <div>
                        <DocumentIcon size="md"/>
                    </div>
                    {title}
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <ShareIcon size="md"/>
                     </div>
                     <div className="hover:text-red-600 transition ease-in-out duration-200">
                        <DeleteIcon size="md"/> 
                    </div>
                    
                </div>
            </div>

            {type === "youtube" && <iframe 
                className="w-full pt-4"
                width="560" 
                height="315" 
                src={link.replace("watch","embed")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
                }

            {type === "tweets" && <blockquote className="twitter-tweet">
            <a href={link}></a> 
            </blockquote>}

        </div>
        
        
        </div>
    )
}