
import type { ReactElement } from "react"
import type {IconType} from "react-icons"

interface ContentIConsProps{
    Icon : ReactElement; 
    text: string;
    color: string;
}

interface MentisWorkingProps{
    Icon : IconType; 
    title : string; 
    desc : string;
}


export function MentisWorkingIcons({Icon, title, desc}:MentisWorkingProps){
    return(
        <div className="text-center w-fit flex flex-col items-center">
            <div className="p-6 rounded-full text-3xl md:text-5xl bg-[#F4F2FD] text-[#5959c0] w-fit text-center border dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:text-white">
                {
                    <Icon />
                }
            </div>
            <div className="mt-4 mb-2 text-xl md:text-2xl font-bold text-gray-700 dark:text-white">
                {
                    title
                }
            </div>
            <div className="text-center max-w-52 md:text-base font-medium text-gray-600 dark:text-gray-300">
                {
                    desc
                }
            </div>
        </div>
    )
}


export function ContentIcons(props:ContentIConsProps){
    return (
        <div className="w-fit text-center">
            <div className={` ${props.color } p-4 rounded-xl bg-white dark:bg-white/10 border my-4`}>
                    {
                        props.Icon
                    }
            </div>
            <div className="font-semibold text-slate-600 dark:text-gray-300">
                {props.text}
            </div>
        </div>
    )
}

export function FeaturesIcons({Icon , title , desc}:MentisWorkingProps){
    return(
        <div className="flex flex-col items-center gap-3">
            <div className="text-[#4C38E3] text-5xl">
                {
                    <Icon  />
                }
            </div>
            <div className="text-[#4C38E3] dark:text-white text-2xl md:text-4xl font-bold ">
                {
                    title
                }
            </div>
            <div className=" text-sn md:text-lg font-medium text-gray-700 dark:text-white">
                {
                    desc
                }
            </div>
        </div>
    )
}