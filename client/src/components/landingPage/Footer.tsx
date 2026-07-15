import { TbBrain } from "react-icons/tb";

export function Footer(){
    return (
        <div className="flex justify-between items-center mt-12 md:mx-22">
                    <div className="flex items-center gap-2">
                        <div className="text-[#614DEE] font-extrabold">
                            {
                                <TbBrain size={32}/>
                            }
                        </div>
                        <div className=" text-lg md:text-2xl font-bold">
                            Mentis
                        </div>
                    </div>
                    {/* <div className=" hidden  lg:flex gap-12 font-medium text-xl text-gray-600">
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>About</div>
                        <div>Blog</div>
                        <div>Contact</div>
                    </div> */}
                    
                    <div className="text-xs sm:text-xl">
                        ©2026 Mentis. All rights reserved.
                    </div>
            </div>
    )
}