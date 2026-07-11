import { Button } from "../components/ui/Button";
import { TbBrain } from "react-icons/tb";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegPlayCircle, FaStar } from "react-icons/fa";
import { ContentIcons, FeaturesIcons, MentisWorkingIcons } from "../components/ui/ContentIcons";
import { FiLink } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoPricetagSharp } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdWatchLater } from "react-icons/md";
import { FaBolt } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { ReviewCard } from "../components/ui/ReviewCard";
import { MdPeopleAlt } from "react-icons/md";
import {Link} from "react-router-dom"
import ContactSection from "../components/ui/ContactSection";
import { ThemeToggle } from "../components/ui/ThemeToggle";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SocalMediaIcon } from "../components/icons/SocialMediaIcon";
import { FaRegLightbulb } from "react-icons/fa";
import { BsBugFill } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa6";


export function LandingPage(){
    return (
        <div className="px-10 min-w-200 pb-12 lg:w-full h-full bg-white dark:text-white dark:bg-linear-to-bl from-slate-900 to-[#06071B]">

            {/* Navbar  */}
            <div className="flex justify-between items-center w-full gap-12 max-w-full py-8 ">
                    <div className="flex items-center gap-2">
                        <div className="text-[#614DEE] font-extrabold">
                            {
                                <TbBrain size={52}/>
                            }
                        </div>
                        <div className="text-4xl font-bold">
                            Mentis
                        </div>
                    </div>
                    <div className=" hidden  lg:flex gap-12 font-medium text-xl">
                        <a href="#feature" className="hover:text-[#614DEE] transition">Feature</a>
                        <a href="#MentisWork" className="hover:text-[#614DEE] transition">How it Works</a>
                        <div>Pricing</div>
                        <div>About</div>
                        <a href="#contact" className="hover:text-[#614DEE] transition">Contact</a>

                    </div>
                    <div className="flex gap-4">
                        <ThemeToggle/>
                        <Link to={"/dashboard"}>
                        <Button style="text-[#614DEE]"  text={"Login"} size="md" variant="secondary" />
                        </Link>
                        <Link to={"/dashboard"}>
                        <Button style="text-white" text={"Get Started Free"} size="md" variant="primary" />
                        </Link>
                    </div>
            </div>

            {/* Hero Section */}
                <div className="mt-14 lg:flex gap-18 w-fit lg:ml-12">
                    <div>
                        <div className="flex items-center gap-2 bg-[#F5F1FD] py-2 px-4 w-fit text-[#614DEE] rounded-lg mt-8">
                            <span className="text-yellow-400 ">{<FaStar/>}</span>Your second brain for everything
                        </div>
                        <div className="text-7xl font-bold mt-8">
                            <div>
                                Save. Organize.
                            </div>
                            
                            <div className="text-[#614DEE] mt-2">
                                Lern. Share.
                            </div>
                        </div>

                        <div className="mt-6 text-base font-medium text-gray-700 max-w-lg text-start">
                            Mentis helps you save links, videos, tweets, articles and documents in one place and find them whenever you need.
                        </div>

                        <div className="flex gap-4 mt-12">
                            <Link to={"/signin"}>
                            <Button style="text-white" size="md" variant="primary" text={"Get Started Free"} endIcon={<IoIosArrowRoundForward size={32}/>} />
                            </Link>
                            <Link to={"/signup"}>
                            <Button size="md" variant="ternary" text={"view Demo"} startIcon={<FaRegPlayCircle/>} />
                            </Link>
                        </div>

                        <div className="">
                            <div className="mt-8 relative flex ">
                                <img className="absolute  h-15 w-15 object-cover rounded-full border-4 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="" />
                                <img className="absolute left-10 h-15 w-15 object-cover rounded-full border-4 border-white" src="https://img.magnific.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                                <img className="absolute left-20 h-15 w-15 object-cover rounded-full border-4 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzVRVcZrCYz6YguqgD_cLlssd3dr3ymolkJM1cHnWSwA&s=10" alt="" />
                                <img className="absolute left-30 h-15 w-15 object-cover rounded-full border-4 border-white" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJQ35YF9G5Tr1I2_-KKaDWS2wqBqCTUSzBsjhnP_DNKYMg_MBW9nqSusZE&s=10" alt="" />
                            </div>
                            <div className="ml-62">
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


                    <div className="shadow-xl border border-gray-200 rounded-2xl overflow-hidden min-w-160 max-w-290 mt-10 lg:mt-2">
                            <img className="w-full" loading="lazy" src={"https://res.cloudinary.com/lg01tbcf/image/upload/f_auto,q_auto/Screenshot_from_2026-07-05_13-15-31_ep904j"} alt="" />
                    </div>
                </div>

                {/* Your Content  */}

            <section id="feature" className="p-10 bg-slate-50 flex flex-col items-center gap-6 my-18 rounded-2xl w-full dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:text-white">
                <div className="text-3xl font-semibold ">
                    All your content. One place.
                </div>
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-24 ">
                    <ContentIcons color="text-[#6556F0]" Icon={<FiLink size={38}/>} text={"Links"} /> 
                    <ContentIcons color="text-[#15A8F3]" Icon={<FaTwitter size={38}/>} text={"Tweets"} /> 
                    <ContentIcons color="text-[#15A8F3]" Icon={<FaYoutube size={38}/>} text={"Videos"} /> 
                    <ContentIcons color="text-[#23A865]" Icon={<IoDocumentText size={38}/>} text={"Documents"} /> 
                    <ContentIcons color="text-[#FCB712]" Icon={<IoPricetagSharp size={38}/>} text={"Tags"} /> 
                    <ContentIcons color="text-[#F88AAC]" Icon={<IoShareSocialOutline size={38}/>} text={"Share"} /> 
                </div>
            </section>
            
            {/* How mentis works  */}
            <section id="MentisWork" className="flex flex-col items-center ">
                <div className="text-4xl font-bold mb-10">
                            How Mentis Works
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-22 ">
                    <MentisWorkingIcons Icon={<LuDownload size={62}/>} title="1.Save" desc="Save links, videos, tweets, articles and docs." />
                    <MentisWorkingIcons Icon={<FaRegFolderOpen size={62}/>} title="2.Organize" desc="Use tags to keep everything organized." />
                    <MentisWorkingIcons Icon={<IoSearch size={62}/>} title="3.Find" desc="Search instantly and find what you need." />
                    <MentisWorkingIcons Icon={<IoShareSocialOutline size={62}/>} title="4.Share" desc="Share your collections with one simple link." />
                </div>
            </section>

            {/* features */}

            <div className="bg-slate-50 rounded-3xl p-16 my-16 dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.35)] dark:text-white">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        <FeaturesIcons Icon={<FaBookmark size={42}/>} title="100+" desc="Resources Saved" />
                        <FeaturesIcons Icon={<FaBolt size={42}/>} title="99%" desc="Uptime" />
                        <FeaturesIcons Icon={<MdWatchLater size={42}/>} title="< 1s" desc="Search Speed" />
                        <FeaturesIcons Icon={<MdPeopleAlt size={52}/>} title="10+" desc="Happy Users" />
                    </div>
            </div>

            <div className="px-26 text-center">
                <div className="text-3xl font-semibold my-10">
                    Loved by learners and builders
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 items-center">
                    <ReviewCard desc="Mentis helps me keep all my learning resources organized and easy to find." name="Anurag Sing" profession="Full Stack Develper" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s" />
                    <ReviewCard desc="Mentis helps me keep all my learning resources organized and easy to find." name="Anurag Sing" profession="Full Stack Develper" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s" />
                    <ReviewCard desc="Mentis helps me keep all my learning resources organized and easy to find." name="Anurag Sing" profession="Full Stack Develper" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s" />
                    <ReviewCard desc="Mentis helps me keep all my learning resources organized and easy to find." name="Anurag Sing" profession="Full Stack Develper" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5dL-EVliC2pRNxVr-ZVXLoc6iLUCM07DoQ4mJZQwiw&s" />
                </div>
            </div>

            {/* contact  */}

            <section id="contact" className="flex items-center mx-40 justify-between">
                <div className="flex flex-col items-start gap-2 max-w-lg">
                    <div className="text-xl font-bold bg-white/10 border border-white/30 text-[#614DEE] px-8 py-2 rounded-full">
                        💬 Let's Connect
                    </div>
                    <div className="text-6xl font-bold my-4">
                        Let's Build <span className="text-[#C175FD]">Mentis</span>  Together
                    </div>
                    <div className="text-md max-w-md text-start text-gray-300">
                        Hi! I'm <span className="text-[#953bda]">Prithwi</span>, the creator of Mentis.
                        I built Mentis to help developers, students, 
                        and creators organize everything they learn in one searchable second brain.
                    </div>
                    <div className="my-4">
                        <div className="flex gap-4 items-center">
                        <div className="bg-[#8e6bf0]/10 p-4 rounded-2xl text-[#8e6bf0]">
                            <FaRegLightbulb size={32}/>
                        </div>
                    <div>
                        <div className="text-lg font-semibold text-start">
                                Have a feature idea?
                        </div>
                        <div className="font-normal text-gray-600 dark:text-gray-400">
                            I'm always open to new ideas.
                        </div>
                    </div>
                        </div>
                        <div className="flex gap-4 my-4 items-center">
                        <div className="bg-[#de49a2]/10 p-4 text-[#de49a2] rounded-2xl">
                            <BsBugFill size={32}/>
                        </div>
                    <div>
                        <div className="text-lg font-semibold text-start">
                                Found a bug?
                        </div>
                        <div className="font-normal text-gray-600 dark:text-gray-400">
                            Let me know so i can fix it.
                        </div>
                    </div>
                        </div>
                        <div className="flex gap-4 items-center">
                        <div className="bg-[#2B74CF]/10 p-4 text-[#2B74CF] rounded-2xl">
                            <FaRegHandshake size={32}/>
                        </div>
                    <div>
                        <div className="text-lg font-semibold text-start">
                                Want to collaborate?
                        </div>
                        <div className="font-normal text-gray-600 dark:text-gray-400">
                            I'd love to build something amazing.
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="text-xl font-semibold my-2">
                        Contact with me
                    </div>
                    <div className="flex gap-4 w-full">

                        <div className="px-12 rounded-2xl bg-white/5 border border-white/15 py-2 text-center flex flex-col items-center hover:shadow-md shadow-[#401B93] transition-all">
                        <SocalMediaIcon color="dark:text-white" Icon={<FaSquareXTwitter size={52}/>} url="https://x.com/PrithwiSingh_" />
                        <div className="mt-2">
                            X(Twitter)
                        </div>
                        </div>
                        <div className="px-12 rounded-2xl bg-white/5 border border-white/15 py-2 text-center flex flex-col items-center hover:shadow-md shadow-[#401B93] transition-all">
                        <SocalMediaIcon color="text-blue-600" Icon={<FaLinkedin size={52}/>} url="https://www.linkedin.com/in/prithwikumar/" />
                        <div className="mt-2">
                            Linkedin
                        </div>
                        </div>
                        <div className="px-12 rounded-2xl bg-white/5 border border-white/15 py-2 text-center flex flex-col items-center hover:shadow-md shadow-[#401B93] transition-all">
                        <SocalMediaIcon color="dark:text-white" Icon={<AiFillGithub size={52}/>} url="https://github.com/PrithwiKumarSingh" />
                        <div className="mt-2">
                            Github
                        </div>
                        </div>
                    </div>
                </div>
                <ContactSection/>
            </section>

            <div className="bg-[#4C38E3] py-12 px-42 text-white rounded-3xl lg:mx-22 my-12 grid grid-cols-1 lg:grid-cols-2  gap-12 ">
                <div className="max-w-md text-start">
                    <div className="text-4xl font-bold ">Ready to build your second brain? </div>
                    <div>
                        Join More than ten people who already organizing their knowladge with Mentis.
                    </div>
                </div>
                <div className="flex gap-12 my-8">
                            <Button style="bg-white text-[#4C38E3]" size="md" variant="primary" text={"Get Started Free"} endIcon={<IoIosArrowRoundForward size={32}/>} />
                            <Button style="text-white" size="md" variant="ternary" text={"view Demo"} startIcon={<FaRegPlayCircle/>} />
                </div>
            </div>

            <div className="flex justify-between items-center mx-22">
                    <div className="flex items-center gap-2">
                        <div className="text-[#614DEE] font-extrabold">
                            {
                                <TbBrain size={32}/>
                            }
                        </div>
                        <div className="text-2xl font-bold">
                            Mentis
                        </div>
                    </div>
                    <div className=" hidden  lg:flex gap-12 font-medium text-xl text-gray-600">
                        <div>Features</div>
                        <div>Pricing</div>
                        <div>About</div>
                        <div>Blog</div>
                        <div>Contact</div>
                    </div>
                    
                    <div>
                        ©2026 Mentis. All rights reserved.
                    </div>
            </div>


        
        </div>
    )
}