import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";

export function CTA(){
    return (
        <div className="bg-[#4C38E3] md:py-12 py-4 px-8 md:px-42 text-white rounded-3xl lg:mx-22  grid grid-cols-1 lg:grid-cols-2  md:gap-12 ">
                        <div className="max-w-md text-start">
                            <div className=" text-2xl md:text-4xl font-bold ">Ready to build your second brain?</div>
                            <div>
                                Join More than ten people who already organizing their knowledge with Mentis.
                            </div>
                        </div>
                        <div className="flex gap-2 md:gap-12 my-8">
                                    <Link to={"/auth/google"}>
                                    <Button style="bg-white dark:bg-gray-800 dark:text-[#4C38E3] border border-white/50" size="md" variant="primary" text={"Start"} endIcon={<IoIosArrowRoundForward size={32}/>} />
                                    </Link>
                                    <Link to={"/auth/google"}>
                                    <Button style="text-white" size="md" variant="ternary" text={"View Demo"} startIcon={<FaRegPlayCircle/>} />
                                    </Link>
                        </div>
                    </div>
    )
}