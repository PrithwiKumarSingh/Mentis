
import type { ReactElement } from "react"


interface ContentIConsProps{
    Icon : ReactElement; 
    text: string;
    color: string;
}

interface MentisWorkingProps{
    Icon : ReactElement; 
    title : string; 
    desc : string;
}


export function MentisWorkingIcons(props:MentisWorkingProps){
    return(
        <div className="text-center w-fit flex flex-col items-center">
            <div className="p-6 rounded-full bg-[#F4F2FD] text-[#5959c0] w-fit text-center">
                {
                    props.Icon
                }
            </div>
            <div className="mt-4 mb-2 text-2xl font-bold text-gray-700">
                {
                    props.title
                }
            </div>
            <div className="text-center max-w-52 text-base font-medium text-gray-600">
                {
                    props.desc
                }
            </div>
        </div>
    )
}


export function ContentIcons(props:ContentIConsProps){
    return (
        <div className="w-fit text-center">
            <div className={` ${props.color } p-4 rounded-xl bg-white my-4`}>
                    {
                        props.Icon
                    }
            </div>
            <div className="font-semibold text-slate-600">
                {props.text}
            </div>
        </div>
    )
}

export function FeaturesIcons(props:MentisWorkingProps){
    return(
        <div className="flex flex-col items-center gap-3">
            <div className="text-[#4C38E3] ">
                {
                    props.Icon
                }
            </div>
            <div className="text-[#4C38E3] text-4xl font-bold ">
                {
                    props.title
                }
            </div>
            <div className="text-lg font-medium text-gray-700">
                {
                    props.desc
                }
            </div>
        </div>
    )
}