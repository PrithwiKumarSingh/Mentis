import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import { useTheme } from "../Embed/ThemeContext";
import { IoIosArrowRoundForward } from "react-icons/io";

export function Hero(){
          const { theme } = useTheme();
    return (
        <div className=" mt-12 md:mt-14 lg:flex gap-18 w-full mx-auto ">
                            <div>
                                <div className="flex items-center gap-2 dark:bg-[#F5F1FD]/10 border border-white/20  px-2 md:px-4 w-fit text-[#614DEE] rounded-lg mt-5 md:mt-8 text-xs md:text-lg">
                                    <span className="text-yellow-400">{<FaStar/>}</span>Your second brain for everything
                                </div>
                                <div className=" text-5xl md:text-7xl font-bold mt-4 md:mt-8">
                                    <div>
                                        Save. Organize.
                                    </div>
                                    
                                    <div className="text-[#614DEE] mt-2">
                                        Learn. Share.
                                    </div>
                                </div>
        
                                <div className="mt-6 text-base font-medium text-gray-700 dark:text-gray-300 max-w-lg text-start">
                                    Mentis helps you save links, videos, tweets, articles and documents in one place and find them whenever you need.
                                </div>
        
                                <div className="flex gap-2 mt-12">
                                    <Link to={"/auth/google"}>
                                    <Button style="text-white" size="md" variant="primary" text={"Start Free"} endIcon={<IoIosArrowRoundForward size={32}/>} />
                                    </Link>
                                    <Link to={"/auth/google"}>
                                    <Button size="md" variant="ternary" text={"view Demo"} startIcon={<FaRegPlayCircle/>} />
                                    </Link>
                                </div>
        
                                <div className="">
                                    <div className="mt-8 relative flex ">
                                        <img className="absolute  h-15 w-15 object-cover rounded-full border-2 md:border-4 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                                        <img className="absolute left-10 h-15 w-15 object-cover rounded-full border-2 md:border-4 border-white" src="https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                                        <img className="absolute left-20 h-15 w-15 object-cover rounded-full border-2 md:border-4 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVRVcZrCYz6YguqgD_cLlssd3dr3ymolkJM1cHnWSwA&s=10" alt="" />
                                        <img className="absolute left-30 h-15 w-15 object-cover rounded-full border-2 md:border-4 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ35YF9G5Tr1I2_-KKaDWS2wqBqCTUSzBsjhnP_DNKYMg_MBW9nqSusZE&s=10" alt="" />
                                    </div>
                                    <div className="ml-49">
                                        <div className="flex gap-2 text-yellow-500">
                                            <FaStar/> 
                                            <FaStar/> 
                                            <FaStar/> 
                                            <FaStar/> 
                                            <FaStar/> 
                                        </div>
                                        <div className="mt-2 text-slate-600">
                                            Loved by 10+ users
                                        </div>
                                    </div>
                                </div>
                            </div>
        
        
                            <div className="shadow-xl border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden w-full h-full mt-10 lg:mt-2">
                                    <img className="w-full" loading="lazy" src={theme=="light" ? "https://res.cloudinary.com/lg01tbcf/image/upload/v1784043815/Screenshot_from_2026-07-14_21-13-10_ojac9f.png" : "https://res.cloudinary.com/lg01tbcf/image/upload/v1784042490/Screenshot_from_2026-07-14_20-50-09_gw1o9g.png"} alt="" />
                            </div>
                        </div>
    )
}