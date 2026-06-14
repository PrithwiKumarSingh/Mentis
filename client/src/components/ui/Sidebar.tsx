import { Logo } from "../icons/Logo";
import { SidebarItem } from "../icons/SidebarItem";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { IoLink } from "react-icons/io5";
import { FiHash } from "react-icons/fi";
import { LuBrainCircuit } from "react-icons/lu";


export function Sidebar(){
    return(
        <div className="p-4 w-64">
            <div className="flex items-center gap-2 pb-4 mt-8 ml-4">
                <div className="text-[#5147E3]">
                    <LuBrainCircuit size={36}/>
                </div>
                <div className="text-4xl font-bold text-slate-700">
                    Mentis
                </div>
            </div>

            <div className="pt-6 flex flex-col gap-2">
                <SidebarItem text="Tweets" icon={<FiTwitter size={24}/>}  />
                <SidebarItem text="Videos" icon={<FiYoutube size={24}/>}  />
                <SidebarItem text="Documents" icon={<GrDocumentText size={22}/>}  />
                <SidebarItem text="Links" icon={<IoLink size={24} />}  />
                <SidebarItem text="Tags" icon={<FiHash size={24}/>}  />
            </div>
        </div>
    )
}