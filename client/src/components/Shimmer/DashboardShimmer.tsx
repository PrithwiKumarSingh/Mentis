import { ContentShimmer } from "./ContentShimmer";
import { SidebarShimmer } from "./SidebarShimmer";

export function DashboardShimmer(){
    return(
        <div>
            <div className='h-screen md:w-72 bg-white border border-gray-200 flex top-0 left-0 fixed dark:bg-linear-to-bl from-slate-900 to-[#06071B] '>
            <SidebarShimmer/>
            </div >
            <div className="dark:bg-linear-to-bl from-slate-900 to-[#06071B]">
                <ContentShimmer/>
            </div>
                
            
        </div>
    )
}