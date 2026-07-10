import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"
import axios from "axios";
import { BACKEND_URL } from "../../config";
import { Slide, toast } from "react-toastify";
import {motion} from "motion/react"



enum ContentType{
    Video = "video",
    Twitter = 'tweets',
    Documents = "document", 
    Links = "link"
}

export function CreateContentModal({open, onClose,refresh}: {
    open : boolean;
    onClose : ()=>void;
    refresh : ()=>void;
}

){

    const titleRef = useRef<HTMLInputElement> (null);
    const linkRef = useRef<HTMLInputElement> (null);
    const [type, setType] = useState(ContentType.Video);
    const [loading, setLoading] = useState(false)


     async function addContent(){
        try{
            setLoading(true)
        const title  = titleRef.current?.value;
        const link = linkRef.current?.value;

        console.log(title + " " + link + " " + type);

        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            type,
            title,
            link
            
        }, {withCredentials:true})
        onClose();
         refresh();
         toast("Create content successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "success", 
                transition: Slide,
                autoClose : 3000
            })
    }catch(err:any){
        toast("Input Missing...", {
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


    return (
        <div>
            {open && <div
             className=" bg-black/60 flex items-center justify-center h-screen w-screen fixed top-0 left-0 z-40 ">
                < motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                 className=" bg-white p-4  dark:text-white dark:bg-white/5 rounded-3xl backdrop-blur-md border border-white/20 shadow-lg transition-all">
                    <div onClick={onClose} className=" flex justify-end cursor-pointer">
                        <CloseIcon />
                    </div>
                    <div className="flex flex-col gap-2 mt-2 p-2">
                        <Input referance={titleRef} placeholder={"Title"} />
                        <Input referance={linkRef} placeholder={"Link"} />
                    </div>
                    <div className="flex items-center my-4 gap-2">
                        <Button style="dark:text-black" onClick={()=>setType(ContentType.Video)} text={"Video"} size="sm" variant={type==ContentType.Video ? "primary" : "secondary"} />
                        <Button style="dark:text-black" onClick={()=>setType(ContentType.Twitter)} text={"Tweets"} size="sm" variant={type==ContentType.Twitter ? "primary" : "secondary"} />
                        <Button style="dark:text-black" onClick={()=>setType(ContentType.Documents)} text={"Docs"} size="sm" variant={type==ContentType.Documents ? "primary" : "secondary"} />
                        <Button style="dark:text-black" onClick={()=>setType(ContentType.Links)} text={"Links"} size="sm" variant={type==ContentType.Links ? "primary" : "secondary"} />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button 
                            loading={loading} 
                            onClick={addContent} 
                            fullWidth 
                            variant="primary" 
                            size="md" 
                            text={loading ? "Saving content..." :"Create Content"} />
                    </div>
                </motion.div>
            </div>}

        </div>
    )
}

interface InputProps{
    placeholder : string; 
    referance? : any;
    value? : string;
}

export function Input({placeholder, referance, value}:InputProps){
    return(
        <div>
            <input defaultValue={value} ref={referance} placeholder={placeholder} type="text" className="px-4 w-full py-2 border rounded"/>
        </div>
    )
}