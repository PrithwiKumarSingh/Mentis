
import type { ReactElement } from "react";

export function SidebarItem({text, icon, active, onClick}: {
    text : string;
    icon : ReactElement;
    onClick? : ()=>void;
    active : boolean;

}){
    return(
        <div 
            onClick={onClick} 
            className={`flex items-center gap-4 transition-all ease-in-out duration-200 pl-4 py-2 rounded cursor-pointer 
                        ${active ? " bg-[#5046E4] text-white" : " hover:bg-[#E0E7FF] hover:text-[#5046E4]"}`}>
            <div>
                {icon}
            </div>
            <div className="text-xl font-medium">
                {text}
            </div>
        </div>
    )
}