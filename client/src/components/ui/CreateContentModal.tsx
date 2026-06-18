import { useRef, useState } from "react";
import { CloseIcon } from "../icons/CloseIcon"
import { Button } from "./Button"
import axios from "axios";
import { BACKEND_URL } from "../../config";



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


     async function addContent(){
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

    }


    return (
        <div>
            {open && <div className=" bg-black/60 flex items-center justify-center h-screen w-screen fixed top-0 left-0">
                <div className=" bg-white p-4 rounded">
                    <div onClick={onClose} className=" flex justify-end cursor-pointer">
                        <CloseIcon />
                    </div>
                    <div className="flex flex-col gap-2 mt-2 p-2">
                        <Input referance={titleRef} placeholder={"Title"} />
                        <Input referance={linkRef} placeholder={"Link"} />
                    </div>
                    <div className="flex items-center my-4 gap-2">
                        <Button onClick={()=>setType(ContentType.Video)} text={"Video"} size="sm" variant={type==ContentType.Video ? "primary" : "secondary"} />
                        <Button onClick={()=>setType(ContentType.Twitter)} text={"Tweets"} size="sm" variant={type==ContentType.Twitter ? "primary" : "secondary"} />
                        <Button onClick={()=>setType(ContentType.Documents)} text={"Docs"} size="sm" variant={type==ContentType.Documents ? "primary" : "secondary"} />
                        <Button onClick={()=>setType(ContentType.Links)} text={"Links"} size="sm" variant={type==ContentType.Links ? "primary" : "secondary"} />
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button onClick={addContent} fullWidth variant="primary" size="md" text={"Submit"} />
                    </div>
                </div>
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