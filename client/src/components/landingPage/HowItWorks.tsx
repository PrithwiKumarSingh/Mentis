import { LuDownload } from "react-icons/lu";
import { MentisWorkingIcons } from "../ui/ContentIcons";
import { FaRegFolderOpen } from "react-icons/fa6";
import { IoSearch, IoShareSocialOutline } from "react-icons/io5";

export function HowItWorks(){
    return(
                    <section id="MentisWork" className="flex flex-col items-center ">
                <div className="text-2xl md:text-4xl font-bold mb-10">
                            How Mentis Works
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-32 ">
                    <MentisWorkingIcons Icon={LuDownload} title="1.Save" desc="Save links, videos, tweets, articles and docs." />
                    <MentisWorkingIcons Icon={FaRegFolderOpen} title="2.Organize" desc="Use tags to keep everything organized." />
                    <MentisWorkingIcons Icon={IoSearch} title="3.Find" desc="Search instantly and find what you need." />
                    <MentisWorkingIcons Icon={IoShareSocialOutline} title="4.Share" desc="Share your collections with one simple link." />
                </div>
            </section>
    )
}