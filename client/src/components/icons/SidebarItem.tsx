
import { ReactElement } from "react";

export function SidebarItem({text, icon}: {
    text : string;
    icon : ReactElement;

}){
    return(
        <div className="flex items-center gap-4 text-slate-600 hover:bg-gray-200 transition-all ease-in-out duration-200 pl-4 py-2 rounded cursor-pointer">
            <div>
                {icon}
            </div>
            <div className="text-xl font-medium">
                {text}
            </div>
        </div>
    )
}