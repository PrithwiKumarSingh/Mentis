import { FiLink } from "react-icons/fi";
import { ContentIcons } from "../ui/ContentIcons";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { IoDocumentText, IoPricetagSharp, IoShareSocialOutline } from "react-icons/io5";
export function Features(){
    const Contents = [
        {
            color : "text-[#6556F0]",
            Icon:FiLink,
            text:"Links"
        },

        {
            color:"text-[#15A8F3]",
            Icon:FaTwitter,
            text:"Tweets"
        },
        {
            color:"text-[#15A8F3]",
             Icon:FaYoutube,
            text:"Videos"
        },
        {
            color:"text-[#23A865]",
            Icon:IoDocumentText,
            text:"Docs"
        },
        {
            color:"text-[#FCB712]",
            Icon:IoPricetagSharp,
            text:"Tags"
        },
        {
            color:"text-[#F88AAC]",
            Icon:IoShareSocialOutline,
            text:"Share"
        }
    ]
    return (
         <section id="feature" className=" p-4 md:p-10 bg-slate-50 flex flex-col items-center gap-2 my-10 md:my-18 rounded-2xl w-full dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:text-white">
                        <div className="text-xl md:text-3xl font-semibold ">
                            All your content. One place.
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols- gap-10 md:gap-34 ">
                            {
                                Contents.map(({color,Icon,text})=>(<ContentIcons 
                                    key={text}
                                    color={color}
                                    Icon={<Icon size={32}/>}
                                    text={text}
                                />))
                            }
                        </div>
                    </section>
    )
}