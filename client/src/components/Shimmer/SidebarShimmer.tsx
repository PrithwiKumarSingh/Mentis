


export function SidebarShimmer(){
    return(
        <div className="p-4 w-64 relative hidden md:block">
            <div className="flex items-center gap-2 pb-4 mt-8 ">
                <div className="w-full px-4 py-8 bg-gray-100 rounded-lg  hover:shadow-black/50 transition-all duration-300 animate-pulse">

                </div>
            </div>

            <div className="pt-6 flex flex-col gap-2">
                <div className="w-full px-4 py-6 bg-gray-200 rounded-lg  shadow-sm hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
                <div className="w-full px-4 py-6 bg-gray-200 rounded-lg shadow-sm hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
                <div className="w-full px-4 py-6 bg-gray-200 rounded-lg shadow-sm hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
                <div className="w-full px-4 py-6 bg-gray-200 rounded-lg shadow-sm hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
                <div className="w-full px-4 py-6 bg-gray-200 rounded-lg shadow-sm hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
                <div className="w-full px-4 py-6 bg-gray-200 rounded-lg shadow-sm hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>

            </div>

            <div className="absolute bottom-10 flex gap-3 items-center justify-between mt-100 w-full px-4 py-3  bg-gray-300 rounded-lg  hover:shadow-black/50 transition-all duration-300 animate-pulse">
                <div className="ml-32 px-12 py-4 bg-gray-200 rounded-lg  hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
            </div>
        </div>
    )
}