import { TbBrain } from "react-icons/tb";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Navbar(){
    return (
        <div className="flex justify-between items-center w-full gap-12 pt-4 md:py-8 ">
                    <div className="flex items-center gap-2">
                        <div className="text-[#614DEE] font-extrabold">
                            {
                                <TbBrain size={42}/>
                            }
                        </div>
                        <div className=" text-3xl md:text-4xl font-bold">
                            Mentis
                        </div>
                    </div>
                    <div className=" hidden  lg:flex gap-12 font-medium text-xl">
                        <a href="#feature" className="hover:text-[#614DEE] transition">Feature</a>
                        <a href="#MentisWork" className="hover:text-[#614DEE] transition">How it Works</a>
                        <a href="#contact" className="hover:text-[#614DEE] transition">Contact</a>

                    </div>
                    <div className="hidden md:flex gap-4 items-center">
                        <ThemeToggle/>
                        <Link to={"/auth/google"}>
                        <Button style="text-[#614DEE]"  text={"Login"} size="md" variant="secondary" />
                        </Link>
                        <Link to={"/auth/google"}>
                        <Button style="text-white" text={"Get Started Free"} size="md" variant="primary" />
                        </Link>
                    </div>
                    <div className="md:hidden flex  items-center">
                        <ThemeToggle/>
                        <Link to={"/auth/google"}>
                        <button className="text-sm font-semibold bg-[#4C38E3] px-3 py-1 rounded">
                            Join
                        </button>
                        </Link>
                        
                    </div>
            </div>
    )
}