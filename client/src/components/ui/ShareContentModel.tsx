import { CloseIcon } from "../icons/CloseIcon";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SocalMediaIcon } from "../icons/SocialMediaIcon";
import { TbMailFilled } from "react-icons/tb";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import {motion} from "motion/react"
import { useState } from "react";
import { FRONTEND_URL } from "../../config";
import { Slide, toast } from "react-toastify";
import { GoCopy } from "react-icons/go";


interface metadata {
    title? : string;
    description? : string;
}
export function ShareContentModel({open, onClose, metadata, hash, link}: {
    open : boolean;
    onClose : ()=>void;
    metadata? : metadata; 
    link? : string;
    hash? : string;
}

){  
    const [copy,setCopy] = useState("Copy");
    const linkUrl = link || `${FRONTEND_URL}/share/${hash}`

    async function copyLink() {
    await navigator.clipboard.writeText(linkUrl);
    setCopy("Copied!");
  toast("Link copied Successfully", {
                position : "bottom-right",
                theme : "colored",
                type : "info", 
                transition: Slide,
                autoClose : 3000
            })

    setTimeout(()=>{
        setCopy("Copy")
    },5000)
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
            {open && <div className=" bg-black/60 flex items-center justify-center h-screen w-screen fixed top-0 left-0 z-40">
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                        className=" bg-white p-4 md:min-w-sm rounded-3xl dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:text-white">
                    <div onClick={onClose} className=" flex justify-end cursor-pointer ">
                        <div className="bg-[#f2f5fc] border border-gray-300 rounded-full p-2 text-black">
                             <CloseIcon />
                        </div>
                       
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-[#dadada]">
                            Share with Friends
                        </h2>
                        <p className="w-68 text-gray-800 mt-3 dark:text-white">Share your digital Brain They also seen what inside of your Brain!</p>
                    </div>

                     
                    <div className="mt-8">
                        <label className="mb-2 block text-lg font-medium">
                            Share your link
                        </label>

                        <div className="relative">
                            <input
                            readOnly
                            value={linkUrl}
                            className="
                                w-full
                                rounded-2xl
                                bg-pink-100
                                px-4
                                py-3
                                pr-14
                                truncate
                                dark:text-black
                            "
                            />

                            <button
                            onClick={copyLink}
                            className="
                                absolute
                                right-4
                                top-1/2
                                -translate-y-1/2
                                transition-transform
                                hover:scale-110
                                dark:text-black
                                cursor-pointer
                            "
                            >
                            {copy === "Copy" ? (
                                <GoCopy size={20} />
                            ) : (
                                <IoCheckmarkDoneOutline size={20} />
                            )}
                            </button>
                        </div>
                        </div>
                    <div className="text-lg font-medium mt-6">
                        Share to
                    </div>
                    <div className="flex items-center mb-4 gap-6 justify-center">
                        <SocalMediaIcon Icon={<IoLogoWhatsapp size={52}/>} url={ hash ? (`https://wa.me/?text=${encodeURIComponent(linkUrl)}`) : whatsappUrl} color={"text-[#25D366]"} />
                        <SocalMediaIcon Icon={<FaSquareXTwitter size={52}/>} url={hash ? (`https://twitter.com/intent/tweet?url=${encodeURIComponent(linkUrl)}`) : twitterUrl} color={"text-black"} />
                        <SocalMediaIcon Icon={<FaLinkedin size={52}/>} url={ hash ? (`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(linkUrl)}`) : linkedinUrl} color={"text-[#0077B5]"} />
                        <SocalMediaIcon Icon={<TbMailFilled size={56}/>} url={ hash ? (`mailto:?subject=${encodeURIComponent(linkUrl)}`) :  emailUrl} color={"text-gray-400"} />
                    </div>
                    
                </motion.div>
            </div>}

        </div>
    )
}
