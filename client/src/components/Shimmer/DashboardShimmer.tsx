import { ContentShimmer } from "./ContentShimmer";
import { SidebarShimmer } from "./SidebarShimmer";

export function DashboardShimmer(){
    return(
        <div>
            <div className='h-screen w-72 bg-white border border-gray-200 flex top-0 left-0 fixed'>
            <SidebarShimmer/>
            </div>
                <ContentShimmer/>
            
        </div>
    )
}