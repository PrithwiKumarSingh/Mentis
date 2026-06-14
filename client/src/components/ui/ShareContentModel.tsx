import { CloseIcon } from "../icons/CloseIcon";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SocalMediaIcon } from "../icons/SocialMediaIcon";
import { TbMailFilled } from "react-icons/tb";
import { Input } from "./CreateContentModal";
import { useState } from "react";


interface metadata {
    title : string;
    description : string;
}
export function ShareContentModel({open, onClose, metadata, link}: {
    open : boolean;
    onClose : ()=>void;
    metadata? : metadata;
    link? : string
}

){  
    const [copy,setCopy] = useState("Copy");
    const linkUrl = link || " "
    async function copyLink() {
  await navigator.clipboard.writeText(linkUrl);
  setCopy("Copied!");
}
    
    const shareText = `${metadata?.title ?? ""}\n\n${metadata?.description ?? ""}`;
   
    const twitterUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(linkUrl)}`
    const whatsappUrl =
    `https://wa.me/?text=${encodeURIComponent(
        `${shareText}\n\n${linkUrl}`
    )}`;

    const linkedinUrl =
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    linkUrl
  )}`;


        const emailUrl =
        `mailto:?subject=${encodeURIComponent(
            metadata?.title ?? ""
        )}&body=${encodeURIComponent(
            `${metadata?.description ?? ""}\n\n${link}`
        )}`;


    return (
        <div>
            {open && <div className=" bg-black/60 flex items-center justify-center h-screen w-screen fixed top-0 left-0">
                <div className=" bg-white p-4 min-w-84 rounded">
                    <div onClick={onClose} className=" flex justify-end cursor-pointer">
                        <CloseIcon />
                    </div>
                    <div className="flex items-center my-4 gap-4 justify-center">
                        <SocalMediaIcon Icon={<IoLogoWhatsapp size={42}/>} url={whatsappUrl} />
                        <SocalMediaIcon Icon={<FaSquareXTwitter size={42}/>} url={twitterUrl} />
                        <SocalMediaIcon Icon={<FaLinkedin size={42}/>} url={linkedinUrl} />
                        <SocalMediaIcon Icon={<TbMailFilled size={48}/>} url={emailUrl} />
                    </div>
                    <div className="flex justify-center mt-4 gap-2 items-center">
                        <Input placeholder="" value={link}  />
                        <button
                         onClick={()=>{copyLink()}}
                         className="bg-slate-800 text-white px-4 py-2 rounded cursor-pointer">{copy}</button>
                    </div>
                </div>
            </div>}

        </div>
    )
}
