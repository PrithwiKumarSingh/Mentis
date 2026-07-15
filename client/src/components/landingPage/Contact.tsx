import { AiFillGithub } from "react-icons/ai";
import { SocalMediaIcon } from "../icons/SocialMediaIcon";
import ContactSection from "../ui/ContactSection";
import { FaLinkedin, FaRegHandshake, FaRegLightbulb, FaSquareXTwitter } from "react-icons/fa6";
import { BsBugFill } from "react-icons/bs";

export function Contact(){
    return (
        <section id="contact" className=" lg:flex items-center mx-auto md:mx-18 justify-between mt-20">
                <div className="flex flex-col items-start gap-2 max-w-lg mx-auto md:mx-24">
                    <div className="text-xl font-bold bg-white/10 border border-white/30 text-[#614DEE] px-8 py-2 rounded-full">
                        💬 Let's Connect
                    </div>
                    <div className="text-6xl font-bold my-4">
                        Let's Build <span className="text-[#C175FD]">Mentis</span>  Together
                    </div>
                    <div className="text-md max-w-md text-start text-black dark:text-gray-300">
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
                        Contact me
                    </div>
                    <div className="flex gap-2 md:gap-6 w-full mx-auto">

                        <div className="px-4 md:px-12 rounded-2xl bg-slate-400/40 dark:bg-white/5 border border-white/15 py-2 text-center flex flex-col items-center hover:shadow-md shadow-[#401B93] transition-all">
                        <SocalMediaIcon color="dark:text-white" Icon={<FaSquareXTwitter size={52}/>} url="https://x.com/PrithwiSingh_" />
                        <div className="mt-2">
                            X(Twitter)
                        </div>
                        </div>
                        <div className="px-4 md:px-12 rounded-2xl bg-slate-400/40 dark:bg-white/5 border border-white/15 py-2 text-center flex flex-col items-center hover:shadow-md shadow-[#401B93] transition-all">
                        <SocalMediaIcon color="text-blue-600" Icon={<FaLinkedin size={52}/>} url="https://www.linkedin.com/in/prithwikumar/" />
                        <div className="mt-2">
                            Linkedin
                        </div>
                        </div>
                        <div className="px-6 md:px-12 rounded-2xl bg-slate-400/40 dark:bg-white/5 border border-white/15 py-2 text-center flex flex-col items-center hover:shadow-md shadow-[#401B93] transition-all">
                        <SocalMediaIcon color="dark:text-white" Icon={<AiFillGithub size={52}/>} url="https://github.com/PrithwiKumarSingh" />
                        <div className="mt-2">
                            Github
                        </div>
                        </div>
                    </div>
                </div>
                <ContactSection/>
            </section>
    )
}