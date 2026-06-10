import { Logo } from "../icons/Logo";
import { SidebarItem } from "../icons/SidebarItem";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { HashTag } from "../icons/HashTag";
import { LinkIcon } from "../icons/LinkIcon";
import { GrDocumentText } from "react-icons/gr";
import { IoLink } from "react-icons/io5";
import { FiHash } from "react-icons/fi";


export function Sidebar(){
    return(
        <div className="p-4 w-64">
            <div className="flex items-center gap-4 pb-4">
                <div className="text-[#5147E3]">
                    <Logo/>
                </div>
                <div className="text-4xl font-bold text-slate-700">
                    Brainly
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