

export function CardShimmer(){
    return(
        <div className="p-4 border border-gray-200 bg-white h-98 rounded-sm min-h-48 min-w-9 ">
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2 text-xl font-medium text-[#0E1522]">
                            <div className="px-4 py-4 rounded-lg bg-gray-200 hover:shadow-black/50 transition-all duration-300 animate-pulse"> </div>
                            <div className="px-24 py-4 bg-gray-200 rounded-lg hover:shadow-black/50 transition-all duration-300 animate-pulse"></div>
                        </div>
                        <div className="flex items-center gap-2">
                             <div className="flex gap-2 duratio100">
                                <div className="px-4 py-4 bg-gray-200 rounded-lg hover:shadow-black/50 transition-all duration-300 animate-pulse"></div> 
                                <div className="px-4 py-4 bg-gray-200 rounded-lg hover:shadow-black/50 transition-all duration-300 animate-pulse"></div> 
                            </div>
                        </div>
                    </div>

                    <div className="h-36 bg-gray-200 mt-6 p-3 rounded-2xl hover:shadow-black/50 transition-all duration-300 animate-pulse">
                         <div className="bg-gray-300 h-full rounded-2xl"></div>
                    </div>
                    <div>
                        <div className="mt-2 max-h-24">
                                
                                <div className="p-6 bg-gray-200 h-32 mt-4 rounded-2xl flex flex-col gap-1  hover:shadow-black/50 transition-all duration-300 animate-pulse">
                                <div className=" py-2 min-w-12 max-w-32 rounded-xl bg-gray-300" ></div>
                                <div className=" py-2 min-w-16 max-w-48 rounded-xl bg-gray-300" ></div>
                                <div className=" py-2 min-w-12 max-w-62 rounded-xl bg-gray-300" ></div>
                                <div className=" py-2 min-w-12 max-w-52 rounded-xl bg-gray-300" ></div>
                                    
                                </div>
                            </div>
                        
                    </div>
                    </div>
    )
}